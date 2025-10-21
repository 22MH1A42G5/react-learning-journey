import { createContext } from "react";
import {initializeApp} from 'firebase/app'



const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
    <FirebaseContext.Provider>
        {props.children}
    </FirebaseContext.Provider>
}