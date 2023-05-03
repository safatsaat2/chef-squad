import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext()


const auth = getAuth(app)


const AuthProviders = ({children}) => {

    const [user, setUser]= useState(null)
    const [loader, setLoader] = useState(true);
    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo ={
        loader,
        auth,
        user,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;