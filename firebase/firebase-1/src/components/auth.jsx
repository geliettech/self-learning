import { useState, useEffect } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";

const Auth = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [logInEmail, setLogInEmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");
    const [user, setUser] = useState(null);

    // Run once on component mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleanup listener when component unmounts
        return () => unsubscribe();
    }, []);

    // Register
    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch (err) {
            console.error(err);
        }
    };

    // Sign In
    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, logInEmail, logInPassword);
        } catch (err) {
            console.error(err);
        }
    };

    // Sign Out
    const logOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("name");
            localStorage.removeItem("email");
            localStorage.removeItem("profilePic");
        } catch (err) {
            console.error(err);
        }
    };

    // Sign In with Google
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
            .then((result) => {
                const name = result.user.displayName;
                const email = result.user.email;
                const profilePic = result.user.photoURL;

                console.log("Google Sign-In successful:", name, email, profilePic);

                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("profilePic", profilePic);
            })
            .catch((error) => {
                console.error("Google Sign-In error:", error);
            });
    };

    return (
        <div className="auth-container">
            {/* Register */}
            <div className="auth-card">
                <h2>Register</h2>
                <input
                    placeholder="Email..."
                    type="email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                />
                <input
                    placeholder="Password..."
                    type="password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button className="primary-btn" onClick={register}>
                    Sign Up
                </button>
                <button className="google-btn" onClick={signInWithGoogle}>
                    Sign Up with Google
                </button>
            </div>

            {/* Log In */}
            <div className="auth-card">
                <h2>Log In</h2>
                <input
                    placeholder="Email..."
                    type="email"
                    value={logInEmail}
                    onChange={(e) => setLogInEmail(e.target.value)}
                />
                <input
                    placeholder="Password..."
                    type="password"
                    value={logInPassword}
                    onChange={(e) => setLogInPassword(e.target.value)}
                />
                <button className="primary-btn" onClick={signIn}>
                    Sign In
                </button>
                <button className="google-btn" onClick={signInWithGoogle}>
                    Sign In with Google
                </button>
            </div>

            {/* Logged In User */}
            <div className="Logged">
                <div className="">
                    <h4>User Logged In: {user?.email}</h4>
                    <img src={localStorage.getItem("profilePic")} alt="Profile" />
                    <p>Name: {localStorage.getItem("name")}</p>
                    <p>Email: {localStorage.getItem("email")}</p>
                </div>

                <button className="logout-btn" onClick={logOut}>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Auth;