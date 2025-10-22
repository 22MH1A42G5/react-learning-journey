import { createContext , useContext, useEffect, useState} from "react";
import {initializeApp} from 'firebase/app'
import { getAuth ,createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup , onAuthStateChanged, signOut } from 'firebase/auth'
import { getDatabase ,set , ref , get , child , onValue } from 'firebase/database'

const GoogleProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAahHZBMoPR_uggh9txFcVcoAq5ZPQqhyY",
  authDomain: "app-b9260.firebaseapp.com",
  databaseURL: "https://app-b9260-default-rtdb.firebaseio.com",
  projectId: "app-b9260",
  storageBucket: "app-b9260.firebasestorage.app",
  messagingSenderId: "915585003629",
  appId: "1:915585003629:web:d2f54b26764d6c995c4f64",
};

export const useFirebase = () => useContext(FirebaseContext)

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
    const [user , setUser] = useState(null);
    const [name , setName] = useState('');

    const signupUserWithEmailAndPassword = (email , password) => {
        return createUserWithEmailAndPassword(firebaseAuth , email , password)
    }
    const putData = (key , data) => {
        set(ref(database , key) , data);
    }

    // get(child(ref(database) , 'grandfather/father/child' )).then(snapshot => {
    //     console.log(snapshot.val());
    // })

    useEffect( () => {
        onValue(ref(database , "grandfather/father/child") , (snapshot) => setName(snapshot.val().name));
    } , []);

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
            <h1> Name is {name}</h1>
            {props.children}
        </FirebaseContext.Provider>
    )
}