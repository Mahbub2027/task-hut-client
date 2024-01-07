import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const GoogleLink = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL,
                }
                 axiosPublic.post('/users', userInfo)
                 .then(res=> {
                    console.log(res.data)
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
            className="border-2 border-blue-500 w-full rounded-xl font-semibold text-lg p-2 flex flex-row items-center justify-center gap-3"><FcGoogle></FcGoogle> Log in with Google</button>
        </div>
    )
};

export default GoogleLink;