import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth"
import app from '../firebase/firebase.config';


export const authContext = createContext()
const auth = getAuth(app)


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


// ==create user===
const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

// ===signout==
const handelOut = () =>{
    setLoading(true)
    return signOut(auth)
}



// ====Login====
const userLogin = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


// ==googleLogin==
const provider = new GoogleAuthProvider()
const googleUser = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)

}

// ====updetProfile
const userUpdet = (profile)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, profile)
}




// ==handle user==
useEffect(() =>{      
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
          setUser(currentUser)
          setLoading(false)
          console.log(currentUser);
      })
      return () =>{
          unsubscribe()
      }
  },[])


const authInfo ={user, loading, createUser, handelOut, userLogin, googleUser, userUpdet}


   return (
       <div>
           <authContext.Provider value={authInfo}>
               {children}
           </authContext.Provider>
       </div>
   );

};

export default Authprovider;