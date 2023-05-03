import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext()


const auth = getAuth(app)


const AuthProviders = ({children}) => {

    const [user, setUser]= useState(null)
    const [loader, setLoader] = useState(true);
    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoader(false)
        })
        return ()=>{
            return unsubscribe;
        }
    },[])

    const authInfo ={
        loader,
        auth,
        user,
        createUser,
        logIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;