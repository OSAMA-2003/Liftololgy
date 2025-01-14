/** @format */


import "./login.css";
import logo from "../../assets/fitness_logo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext} from "react";
import { AuthContext } from "../../container/contexts/Auth";
function Login() {

    const {register , handleSubmit , formState:{errors}} = useForm()
    const navigate = useNavigate();
    const redirectPath = location.state?.path || "/";

    const {login} = useContext(AuthContext)

    const onSubmit = (data) => {
      console.log(data);
      login({
        name: data.name,
        tall: data.tall,
        weight: data.weight,
      });
      navigate(redirectPath, { replace: true });
    };
    
    

  return (
    <>
      <div className="container min-h-screen ">
        <div className="row pt-24">
          <div className="col-lg-10 col-xl-9 mx-auto h-100">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left gradient__bg  d-flex  ">
              <div className=" flex justify-center align-center">
              <img src={logo} className="w-50" />
                  {/* <h2 className="text-center text-black mt-4">Project</h2> */}
                </div>
              </div>
              <div className="card-body p-4 p-sm-5">
                <h3 className="card-title text-center mb-5 ">Login</h3>

                <form onSubmit={handleSubmit(onSubmit)} > 
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputUserName"
                      placeholder="name"
                      name="name"
                      {...register ("name",{required:true ,minLength:3,pattern: /^[A-Za-z]+$/i })}
                    />
                    <label >User name</label>
                  </div>
                  {errors.name?.type==="required" && <p className=" text-danger">This field is required</p>}
                  {errors.name?.type==="minLength" && <p className=" text-danger">Three letters min</p>}
                  {errors.name?.type==="pattern" && <p className=" text-danger">Letters only</p>}
                  


                 
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      {...register ("password",{required:true , minLength:8}) }
                    />
                    <label>Password</label>
                  </div>
                  {errors.password?.type=="required" && <p className=" text-danger mb-3">This field is required</p>}
                  {errors.password?.type=="minLength" && <p className=" text-danger mb-3">8 characters minimum</p>}


                  {/* New Addition */}

                  <div className="flex gap-5">
  {/* Tall Input */}
  <div className="form-floating mb-3">
    <input
      type="number"
      className="form-control "
      id="floatingInputTall"
      placeholder="cm"
      name="tall"
      min="140" // Minimum tall
      max="220" // Maximum tall
      {...register("tall", {
        required: true,
        min: 140,
        max: 220,
      })}
    />
    <label>Tall</label>
    {errors.tall?.type === "required" && (
      <p className="text-danger">Tall is required</p>
    )}
    {errors.tall?.type === "min" && (
      <p className="text-danger">Minimum tall is 140 cm</p>
    )}
    {errors.tall?.type === "max" && (
      <p className="text-danger">Maximum tall is 220 cm</p>
    )}
  </div>

  {/* Weight Input */}
  <div className="form-floating mb-3">
    <input
      type="number"
      className="form-control"
      id="floatingInputWeight"
      placeholder="KG"
      name="weight"
      min="40" // Minimum weight
      max="300" // Maximum weight
      {...register("weight", {
        required: true,
        min: 40,
        max: 300,
      })}
    />
    <label>Weight</label>
    {errors.weight?.type === "required" && (
      <p className="text-danger">Weight is required</p>
    )}
    {errors.weight?.type === "min" && (
      <p className="text-danger">Minimum weight is 40 KG</p>
    )}
    {errors.weight?.type === "max" && (
      <p className="text-danger">Maximum weight is 300 KG</p>
    )}
  </div>
</div>








                  
                    <div className="d-grid mb-2">
                      <button
                        className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  
                  <Link
                    to="/signUp"
                    className="d-block !my-1 text-black text-center mt-2 "
                  >
                    Don`t have account? Sign Up
                  </Link>

                  <hr className="my-4" />

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-google btn-login fw-bold text-uppercase d-flex"
                      type="submit"
                    >
                      <FcGoogle className="mx-3 fs-4" /> Sign in with Google
                    </button>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase d-flex"
                      type="submit"
                    >
                      <FaFacebook className="mx-3 fs-4" />
                      Sign in with Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
