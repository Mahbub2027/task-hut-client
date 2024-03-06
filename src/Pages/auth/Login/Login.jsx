import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLink from "../../sharedComponents/GoogleLinks/GoogleLink";
import Swal from "sweetalert2";

const Login = () => {
    const {logInUser, resetPassword} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const emailRef = useRef(null);


    const handleUserLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email= form.email.value;
        const password= form.password.value;
        const userLogin= {email, password};
        console.log(userLogin);
        

        logInUser(email, password)
        .then(res=>{
            console.log(res.user)
            if(res.user.emailVerified){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/')
                
            }
            else
            {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please check your email & verify",
                    // footer: 'Please verify your email'
                  });
                  
            }
            // navigate('/')

        })
        .catch(error=>{
            console.log(error);
            setErrorMessage('*Auth/invalid-credential')
        })
    }

    const handleForgotPass = () =>{
        const email = emailRef.current.value;
        if(!email){
            console.log("Send email successfully", emailRef.current.value);
        return;
        }
        else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            console.log("Please provide valid email");
            return;
        }

        // password reset
        resetPassword(email)
        .then( ()=>{
            alert("Check your email")
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div >
            <Helmet>
                <title>Login || TaskHut</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-24">
                    <div className="text-center lg:text-left w-1/2 mx-auto">
                        <img src="https://i.ibb.co/jWnpV9R/login-svg.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 w-full  lg:w-1/2 mx-auto shadow-2xl bg-base-100">
                    <h2 className="text-3xl font-bold text-center mt-2">Welcome Back</h2>
                        <form onSubmit={handleUserLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span  className="label-text font-bold text-base">Email</span>
                                </label>
                                <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                                <span className="absolute bottom-12 right-3 text-lg" onClick={()=> setShowPassword(!showPassword)}>
                                        {showPassword ?  <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                </span>
                                <label className="label ">
                                    <a href="#" onClick={handleForgotPass}  className="label-text-alt link link-hover text-blue-600">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-base font-bold text-white">Continue</button>
                            </div>
                            {
                                errorMessage && <p className="text-red-500">{errorMessage}</p>
                            }
                            <div className="divider">Or</div>
                            {/* google Link */}
                            <GoogleLink></GoogleLink>

                            <p>New Here? Please <Link to='/signup' className="font-bold text-blue-600">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;