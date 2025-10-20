import React from "react";
import {useState} from 'react';
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SignUp = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const createUser = () => {
        createUserWithEmailAndPassword( auth , email , password)
        .then((value) => alert("Success"))
    }
    return (
        <div className="signup-page">
            <h1>Sign Up Page</h1>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" required placeholder="Enter Email"/> 
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value = {password} type="password" required placeholder="Enter Password"/> 
            <button onClick={createUser}>Sign Up</button>
        </div>
    )
}
export default SignUp;

