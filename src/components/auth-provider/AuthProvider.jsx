import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider, updateProfile} from "firebase/auth"
import auth from "../../firebase/firebase.config";

export const UserAuth = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // google authentication
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // google authentication
    const continueWithGithub= () => {
        return signInWithPopup(auth, githubProvider)
    }

    // create account with email and password

    const createAccountWithemail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //  sign in with email and password

    const logInWithEmail = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password);
    }

    // sign out 

    const logOut = () =>{
        return signOut(auth);    
    }

    //get user state
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            // if (currentUser) {
            //     setUser(currentUser);
            //     console.log(currentUser);
            // }
            setUser(currentUser);
            setLoading(false);
          });

          return (() => unSubscribe());
    }, [])

    // update user info

    const handleUpdateUserInfo = (name) => {
        return updateProfile(auth.currentUser, {displayName: name});
    }

    // context api info
    const userInfo = {
        continueWithGoogle,
        createAccountWithemail,
        logInWithEmail,
        user,
        logOut,
        loading,
        continueWithGithub,
        handleUpdateUserInfo
    }
    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default AuthProvider;