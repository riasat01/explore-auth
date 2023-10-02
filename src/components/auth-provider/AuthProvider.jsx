import { createContext } from "react";
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import auth from "../../firebase/firebase.config";
import Login from "../../pages/login/Login";

export const UserAuth = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    // google authentication
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // create account with email and password

    const createAccountWithemail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //  sign in with email and password

    const logInWithEmail = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password);
    }

    // context api info
    const userInfo = {
        continueWithGoogle,
        createAccountWithemail,
        logInWithEmail
    }
    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthProvider;