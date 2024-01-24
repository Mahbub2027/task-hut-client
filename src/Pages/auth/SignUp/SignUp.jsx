import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import GoogleLink from "../../sharedComponents/GoogleLinks/GoogleLink";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
    const { createUser, updateUserProfile, emailVerification } = useAuth();
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate = useNavigate();


    const onSubmit = async(data) => {
        console.log(data)
        // image upload imgBB
        const imageFile = {image : data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if(res.data.success){
            const userDetails = {
                name : data.name,
                email: data.email,
                role: "user",
                image: res.data.data.display_url, 
            }
            const userRes = await axiosPublic.post('/users', userDetails)
            // .then(res=> {
            //     console.log(res.data)
            // })
            console.log(userRes, data);
        } 

        createUser(data.email, data.password)
            .then(res => {
                console.log(res.user)
                    
                //update profile
                updateUserProfile(data.name)
                    .then(() => {
                        // console.log(res.user)
                    })
                    .catch(error => {
                        console.log(error);
                    })

                // email verification
                emailVerification()
                    .then(()=> {
                        Swal.fire({
                            // title: "Good job!",
                            text: "Please verify your email",
                            icon: "warning"
                          });
                          
                        reset();
                        setTimeout(() => {
                            navigate('/login')
                        }, 15000);
                    })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                console.log(error)
                setErrorMessage('*Auth/email-already-in-use')
                // setErrorMessage(error.message)
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
                    <div className="card shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-3xl font-bold text-center">Create an account</h2>
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
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className=" input input-bordered" required />
                                <span className="absolute bottom-4 right-3" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </span>
                                {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 character</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500">Password must be less than 20 charaterr</span>}
                                {errors.password?.type === 'pattern' && <p
                                    className="text-red-500">Password must be one capital letter, one small letter,
                                    one number & one special character</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Upload Photo</span>
                                </label>
                                <div>
                                    <input {...register('image')} type="file" className="file-input file-input-bordered my-1 w-full max-w-xs" />
                                </div>
                                {/* <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo url" className="input input-bordered" required />
                                {errors.photo && <span className="text-red-500">This field is required</span>} */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-lg text-white">Register</button>
                            </div>
                            {
                                errorMessage && <p className="text-red-500">{errorMessage}</p>
                            }
                            <div className="divider">Or</div>
                             {/* social account login */}
                            <GoogleLink></GoogleLink>
                            <p>Already Have an account? Please <Link to='/login' className="font-bold text-blue-600">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;