import { useState } from "react";
import "./login.css";
import logo from "../../assets/fitness_logo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdError } from "react-icons/md"; // ✅ أيقونة الخطأ
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

function Login() {
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ متغير للأخطاء
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const handleLogin = async (data) => {
    setLoading(true);
    setError(""); // ✅ امسح أي Error قبل المحاولة
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      if (error.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Account temporarily locked. Try again later.");
      } else {
        setError("Incorrect email or password");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      if (error.code === 'auth/account-exists-with-different-credential') {
        setError("An account already exists with this email. Try logging in with email/password.");
      } else {
        setError("Google login failed");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="container min-h-screen relative">
      
      {/* ✅ مربع الخطأ في نص الصفحة */}
      {error && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded flex items-center gap-2 shadow-lg z-50">
          <MdError className="text-red-600 text-2xl" />
          <span className="font-semibold">{error}</span>
        </div>
      )}
      
      <div className="row pt-24">
        <div className="col-lg-10 col-xl-9 mx-auto h-100">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left gradient__bg d-flex">
              <div className="flex justify-center align-center">
                <img src={logo} className="w-50" alt="Fitness Logo" />
              </div>
            </div>
            <div className="card-body p-4 p-sm-5">
              <h3 className="card-title text-2xl font-bold text-center mb-5">Login</h3>

              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="floatingEmail"
                    placeholder="Email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  <label htmlFor="floatingEmail">Email</label>
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    id="floatingPassword"
                    placeholder="Password"
                    {...register("password", { 
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Minimum 8 characters required"
                      }
                    })}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div className="d-grid mb-2">
                  <button
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>

                <Link
                  to="/signUp"
                  className="d-block text-center text-muted mb-3"
                >
                  Don't have an account? Sign Up
                </Link>

                <div className="d-grid mb-2">
                  <button
                    className="btn btn-lg btn-outline-primary btn-login fw-bold text-uppercase d-flex align-items-center justify-content-center"
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={googleLoading}
                  >
                    <FcGoogle className="mx-2 fs-5" />
                    {googleLoading ? "Signing in..." : "Sign in with Google"}
                  </button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
