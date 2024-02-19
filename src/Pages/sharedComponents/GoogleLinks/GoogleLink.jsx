import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { db } from "../../../firebase/firebase.config.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleLink = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();



  //add user data to firebase
  const storeFirebase = async (name, email, uid, image) => {
    console.log("Inside function storeFirebase");

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
    }
    else{
      console.log("doc already exist");
    }


  };


  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => {
        console.log(res.user)


        console.log("uid: " + res.uid);

        storeFirebase(
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
          role: 'user',
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data)
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Login Successful",
              showConfirmButton: false,
              timer: 1500
            });


            navigate('/')
          })
      })

      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <button onClick={handleGoogleLogin}
        className="border-2 border-blue-500 w-full rounded-xl font-semibold text-lg p-2 flex flex-row items-center justify-center gap-3"><FcGoogle></FcGoogle> Continue with Google</button>
    </div>
  )
};

export default GoogleLink;