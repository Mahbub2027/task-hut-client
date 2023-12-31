import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
// import Swal from "sweetalert2";

const SignUp = () => {
    const {createUser, googleLogin, updateUserProfile} = useAuth();

    const {register, handleSubmit, formState: { errors }} = useForm()
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        
        createUser(data.email, data.password)
        .then(res=>{
            console.log(res.user)

            //update profile
            updateUserProfile(data.name, data.photo)
            .then(result=>{
                console.log(result.user)
            })
            .catch(error=>{
                console.log(error);
            })

            navigate('/');

        })
        .catch(error => {
            console.log(error)
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
    return (
        <div >
            <Helmet>
                <title>SignUp || TaskHut</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-24">
                    <div className="text-center lg:text-left w-1/2 max-w-sm">
                        <img src="https://i.ibb.co/jWnpV9R/login-svg.jpg" alt="" />
                    </div>
                    <div className="card shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter your name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter your email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500">Password must be less than 20 charaterr</span>}
                                {errors.password?.type === 'pattern' && <p
                                    className="text-red-500">Password must be one capital letter, one small letter,
                                    one number & one special character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Photo url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo url" className="input input-bordered" required />
                                {errors.photo && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="divider">Or</div>
                            <div className="form-control mt-1">
                                <button onClick={handleGoogleLogin}
                                className="flex flex-row gap-2 items-center justify-center border-2 border-blue-600 text-lg font-semibold w-full p-2 rounded-lg">
                                    <FcGoogle />
                                    Google</button>
                            </div>
                            <p>Already Have an account? Please <Link to='/login' className="font-bold text-blue-600">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;