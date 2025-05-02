import { useState } from "react";
import logo from "../../assets/fitness_logo.png";
import "../login/login.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup, fetchSignInMethodsForEmail } from "firebase/auth";
import { toast } from "react-toastify";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(""); // To display email error message
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password");

  const handleSignUp = async (data) => {
    setLoading(true);
    try {
      // Check if the email is already in use
      const methods = await fetchSignInMethodsForEmail(auth, data.email);
      if (methods.length > 0) {
        setEmailError("This email is already in use.");
        setLoading(false);
        return;
      }

      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container min-h-screen">
      <div className="row pt-24">
        <div className="col-lg-10 col-xl-9 mx-auto h-100">
          <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left gradient__bg d-flex">
              <div className="flex justify-center align-center">
                <img src={logo} className="w-50" alt="Fitness Logo" />
              </div>
            </div>
            <div className="card-body p-4 p-sm-5">
              <h3 className="card-title text-2xl font-bold text-center mb-5">Sign Up</h3>
              <form onSubmit={handleSubmit(handleSignUp)}>
                {/* Full Name */}
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="floatingInputUserName"
                    placeholder="name"
                    {...register("name", {
                      required: true,
                      minLength: 3,
                      pattern: /^[A-Za-z\s]+$/i,
                    })}
                  />
                  <label>Full Name</label>
                  {errors.name?.type === "required" && (
                    <div className="invalid-feedback">This field is required</div>
                  )}
                  {errors.name?.type === "minLength" && (
                    <div className="invalid-feedback">Three letters minimum</div>
                  )}
                  {errors.name?.type === "pattern" && (
                    <div className="invalid-feedback">Letters and spaces only</div>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  <label>Email address</label>
                  {errors.email?.type === "required" && (
                    <div className="invalid-feedback">This field is required</div>
                  )}
                  {errors.email?.type === "pattern" && (
                    <div className="invalid-feedback">Invalid email format</div>
                  )}
                  {emailError && <div className="invalid-feedback">{emailError}</div>} {/* Email Error */}
                </div>

                {/* Password */}
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    id="floatingPassword"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                    })}
                  />
                  <label>Password</label>
                  {errors.password?.type === "required" && (
                    <div className="invalid-feedback">This field is required</div>
                  )}
                  {errors.password?.type === "minLength" && (
                    <div className="invalid-feedback">8 characters minimum</div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  <label>Confirm Password</label>
                  {errors.confirmPassword?.type === "required" && (
                    <div className="invalid-feedback">This field is required</div>
                  )}
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                  )}
                </div>

                {/* Sign Up Button */}
                <div className="d-grid mb-2">
                  <button
                    className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
                  </button>
                </div>

                <Link to="/login" className="d-block text-center my-2 mt-2 text-muted">
                  Already have an account? Login
                </Link>

                {/* Google Sign Up */}
                <div className="d-grid mb-2">
                  <button
                    className="btn btn-lg btn-outline-primary btn-login fw-bold text-uppercase d-flex align-items-center justify-content-center"
                    type="button"
                    onClick={handleGoogleSignUp}
                    disabled={loading}
                  >
                    <FcGoogle className="mx-2 fs-5" />
                    Sign up with Google
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

export default SignUp;
