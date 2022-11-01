import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export  const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null)
    const [laoding, setLoading] = useState(true) 
    const createUser = (email, password) =>{
    return    createUserWithEmailAndPassword(auth, email, password)

    }

    const providerLogin = ( provider)=>{
        setLoading(true)
      return   signInWithPopup(auth, provider);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password) 
    }


    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser , profile)
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // amra akane firebase er manageUser ta use krobo jate user akn login kora ase naki nai ta dhekar jonno 
    useEffect( () =>{

        const unSubscribed = onAuthStateChanged(auth, (currentUser) =>{
            console.log('user inside state change', currentUser)
          if( currentUser === null ||   currentUser.emailVerified){
            setUser(currentUser)
            
          }
            setLoading(false)

        });
        return ()=>{
            unSubscribed()
        }
    }, [])
    
    const authInfo = {user, providerLogin, user, setUser, logOut, createUser, signIn , laoding, setLoading , 
        updateUserProfile, verifyEmail}
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;