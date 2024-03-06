import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import GoogleLink from "../../sharedComponents/GoogleLinks/GoogleLink";
import Swal from "sweetalert2";
// import { FcGoogle } from "react-icons/fc";
import { db } from "../../../firebase/firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref } from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BuyerSignup = () => {
  const { createUser, googleLogin, updateUserProfile, emailVerification } =
    useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  let firebaseUser;

  //add user data to firebase
  const storeFirebase = async (name, email, uid, image) => {
    console.log("Inside function storeFirebase");
    try {
      console.log("firebaseeeee" + name + "mail:" + email);

      //create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${name + date}`);
      const img = image;
      const uploadTask = await uploadBytesResumable(storageRef, img);

      getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
          console.log("dldURL:" + downloadURL);

          //add profile image
          await updateProfile(firebaseUser, {
            name,
            photoURL: downloadURL,
          });

          //store user data on firestore db
          await setDoc(doc(db, "users", uid), {
            uid: uid,
            displayName: name,
            email: email,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "userChats", uid), {});
        } catch (err) {
          console.log(err);
        }
      });
      // );
    } catch (e) {
      console.log(e);
    }
  };

  //add user data to firebase google signup


  const storeFirebaseGoogle = async (name, email, uid, image) => {
    console.log("Inside function storeFirebaseGoogle");
    const res = await getDoc(doc(db, "users", uid));


    if (!res.exists()) {
      try {
        console.log("firebaseeeee" + name + "mail:" + email);


        //store user data on firestore db
        await setDoc(doc(db, "users", uid), {
          uid: uid,
          displayName: name,
          email: email,
          photoURL: image,
        });


        await setDoc(doc(db, "userChats", uid), {});
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("doc already exists!!!");
    }
  };




  // email sign up
  const onSubmit = async (data) => {
    console.log(data);

    // image upload imgBB
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      const userDetails = {
        name: data.name,
        email: data.email,
        image: res.data.data.display_url,
        role: "buyer",
      };
      const userRes = await axiosPublic.post("/users", userDetails);

      console.log(userRes, data);
    }

    createUser(data.email, data.password)
      .then((response) => {
        console.log(response.user);

        //--------------------------------------------------------------
        firebaseUser = response.user;
        console.log("uid=" + response.user.uid);

        storeFirebase(data.name, data.email, response.user.uid, image);

        //-----------------------------------------------------------------
        //update profile
        updateUserProfile(data.name)
          .then(() => {
            // console.log(res.user)
          })
          .catch((error) => {
            console.log(error);
          });

        // email verification
        emailVerification()
          .then(() => {
            Swal.fire({
              text: "Please verify your email",
              icon: "warning",
            });

            reset();
            setTimeout(() => {
              navigate("/login");
            }, 15000);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("*Auth/email-already-in-use");
        // setErrorMessage(error.message)
      });
  };
  // google sign up
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);

        //-- Store user data to firebase
        console.log("uid: " + res.user.uid);

        storeFirebaseGoogle(
          res.user.displayName,
          res.user.email,
          res.user.uid,
          res.user.photoURL
        );
        //--

        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          image: res.user.photoURL,
          role: "buyer",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });


          navigate("/");
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
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
              <h2 className="text-3xl font-bold text-center">
                Join as a <span className="text-blue-600">Company</span>
              </h2>
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text font-bold text-base">Name</span> */}
                </label>
                <input
                  type="text"{...register("name", { required: true })}
                  name="name"
                  placeholder="company name"
                  className="input input-bordered" required />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text font-bold text-base">Email</span> */}
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered" required />
                {errors.email && (<span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className=" relative">
                <label className="label">
                  {/* <span className="label-text font-bold text-base">Password</span> */}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}{...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="Password"
                    className="w-full input input-bordered"
                    required
                  />
                  <span
                    className="absolute bottom-4 right-3 text-lg"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>

                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500">
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500">
                    Password must be less than 20 charaterr
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must be one capital letter, one small letter, one
                    number & one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-base">
                    Company Logo
                  </span>
                </label>
                <div>
                  <input
                    {...register("image")}
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="file-input file-input-bordered my-1 w-full max-w-xs"
                  />
                  {errors.image && (<span className="text-red-500">This field is required</span>
                  )}
                </div>
                {/* <input type="text" {...register("photo", { required: true })} name="photo" placeholder="Photo url" className="input input-bordered" required />
                                {errors.photo && <span className="text-red-500">This field is required</span>} */}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-lg text-white">
                  Sign Up
                </button>
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              {/* <div className="divider">Or</div> */}
              {/* social account login */}
              {/* <div>
                <button
                  onClick={handleGoogleLogin}
                  className="border-2 border-blue-500 w-full rounded-xl font-semibold text-lg p-2 flex flex-row items-center justify-center gap-3"
                >
                  <FcGoogle></FcGoogle>Sign up with Google
                </button>
              </div> */}
              <p>
                Already Have an account? Please{" "}
                <Link to="/login" className="font-bold text-blue-600">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerSignup;
