import { createContext } from "react";
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import auth from "../../firebase/firebase.config";

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

    // context api info
    const userInfo = {
        continueWithGoogle,
        createAccountWithemail
    }
    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthProvider;