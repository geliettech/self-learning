import { auth, googleProvider } from "../../config/firebase";
import {
    signInWithPopup
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

const Auth = () => {

    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo()


    // Sign In with Google
    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, googleProvider)
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePic: results.user.photoURL,
            isAuth: true
        }
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/dashboard")
    };

    if (isAuth) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div className="auth-card">
            <p>Sign In With Google to Continue</p>
            <button className="google-btn" onClick={signInWithGoogle}>
                Sign In with Google
            </button>
        </div>
    );
};

export default Auth;