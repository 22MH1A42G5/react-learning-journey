import { signOut } from "firebase/auth";
import { useFirebase } from "./context/Firebase";
import React, { useState } from "react"

function App() {
  const firebase = useFirebase();
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  console.log(firebase);
  if(firebase.user === null){
    return (
      <div>
        <h1>Firebase</h1>
        <input onChange={e => setEmail(e.target.value)} value = {email} type="email" placeholder="Enter Email" />
        <input onChange={e => setPassword(e.target.value)} value = {password} type="password" placeholder="Enter Password" />
        <button
          onClick = { () => {
            firebase.signupUserWithEmailAndPassword(email , password)
            firebase.putData('user/' + "sriram" , {email , password});
          }}>  Sign Up
        </button>
        <h1>Signin With Google</h1>
        <button onClick={e => firebase.signUpWithGoogle()}>With Google</button>
      </div>
    )
  }
  else{
    // console.log(firebase.user.displayName);
    return (
      <>
        <h1>Hello , {firebase.user.displayName} </h1>
        <button onClick={ () => firebase.Logout()}>log out</button>
      </>
    )
  }
}

export default App;
