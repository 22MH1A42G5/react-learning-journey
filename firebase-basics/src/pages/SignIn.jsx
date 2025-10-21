import React , {useState} from "react";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignIn = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const signInUser = () => {
        signInWithEmailAndPassword(auth , email , password)
        .then((value) => 
            {
                console.log("login Sucess" , value);
                alert("Logged In");
            }
        )
        .catch((err) => console.log("Error" , err));
    }

    return (
        <div className="signin-page">
            <h1>SignIn Page</h1>
            <label>Enter the Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email"></input>
            <label>Enter the Password</label>
            <input onChange={e => setPassword(e.target.value)} value = {password} type="password" placeholder="Enter password"></input>
            <button onClick={signInUser}>Sign in</button>

        </div>
    )
}

export default SignIn;