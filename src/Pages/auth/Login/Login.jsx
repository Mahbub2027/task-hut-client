import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const {logInUser, googleLogin, resetPassword} = useAuth();
    const [showPassword, setShowPassword] = useState(false);
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
                navigate('/')
            }
            else
            {
                alert("Please verify your email");
            }
            // navigate('/')

        })
        .catch(error=>{
            console.log(error);
        })
    }
    const handleGoogleLogin =() =>{
        googleLogin()
        .then(res=> {
            console.log(res.user)
            navigate('/');
        })
        .catch(error => {
            console.log(error)
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
                    <div className="card shrink-0 w-1/2 mx-auto shadow-2xl bg-base-100">
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
                                <span className="absolute bottom-12 right-3" onClick={()=> setShowPassword(!showPassword)}>
                                        {showPassword ?  <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </span>
                                <label className="label ">
                                    <a href="#" onClick={handleForgotPass}  className="label-text-alt link link-hover text-blue-600">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-base font-bold text-white">Login</button>
                            </div>
                            <div className="divider">Or</div>
                            <div className="form-control mt-1">
                                <button onClick={handleGoogleLogin}
                                className="flex flex-row gap-2 items-center justify-center border-2 border-blue-600 text-lg font-semibold w-full p-2 rounded-lg">
                                    <FcGoogle />
                                    Google</button>
                            </div>
                            <p>New Here? Please <Link to='/signup' className="font-bold text-blue-600">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;