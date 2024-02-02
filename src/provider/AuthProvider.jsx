import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    // user create for signup with email/ password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user login with email/pass
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user login with google
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // update profile
    const updateUserProfile = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    // logOut user
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // email verification
    const emailVerification = () =>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser);
    }

    // reset password
    const resetPassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }


    // auth state Change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else {
                localStorage.removeItem('access-token');
            }
            setLoading(false);
            console.log("current user", currentUser);
            
        })
        return () => {
            return unSubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        googleLogin,
        updateUserProfile,
        logoutUser,
        emailVerification,
        resetPassword,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;