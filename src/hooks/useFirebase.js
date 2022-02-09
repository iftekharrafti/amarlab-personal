import initializeAuthentication from "../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged, 
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = (navigate) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate('/')
      })
      .catch((error) => {});
  };

  const registerUser = (email, password,navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential.user);
      navigate('/')
    })
    .catch((error) => {
        alert(error)
    });
  }

  const loginUser = (email, password,navigate) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setUser(userCredential.user);
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          // User is signed out
          // ...
        }
      });
      return unsubscribe;
  },[])

  return {
    user,
    signInWithGoogle,
    registerUser,
    loginUser,
    logOut
  };
};

export default useFirebase;
