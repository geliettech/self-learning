import { auth, googleProvider } from "../../config/firebase";
import {
    signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router";

const Auth = () => {

    const navigate = useNavigate();

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