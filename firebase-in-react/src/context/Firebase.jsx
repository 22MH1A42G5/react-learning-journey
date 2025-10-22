import { createContext , useContext, useEffect, useState} from "react";
import {initializeApp} from 'firebase/app'
import { getAuth ,createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup , onAuthStateChanged, signOut } from 'firebase/auth'
import { getDatabase ,set , ref } from 'firebase/database'

const GoogleProvider = new GoogleAuthProvider();

const firebaseConfig = {
};

export const useFirebase = () => useContext(FirebaseContext)

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
    const [user , setUser] = useState(null);

    const signupUserWithEmailAndPassword = (email , password) => {
        return createUserWithEmailAndPassword(firebaseAuth , email , password)
    }
    const putData = (key , data) => {
        set(ref(database , key) , data);
    }
    useEffect( () => {
        onAuthStateChanged(firebaseAuth , (user) => {
            if(user)
                setUser(user);
            else{
                console.log("You are Logged out")
                setUser(null);
            }
        })
    } , [])
    const signUpWithGoogle = () => {
        signInWithPopup(firebaseAuth , GoogleProvider)
    }
    const Logout = () => {
        signOut(firebaseAuth);
    }
    return (
        <FirebaseContext.Provider value={{
            signupUserWithEmailAndPassword,
            putData,
            signUpWithGoogle,
            user,
            setUser,
            Logout,
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}