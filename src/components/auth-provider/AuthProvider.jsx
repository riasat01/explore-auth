import { createContext } from "react";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import auth from "../../firebase/firebase.config";

export const UserAuth = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userInfo = {
        continueWithGoogle
    }
    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthProvider;