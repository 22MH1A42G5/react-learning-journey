// import {getDatabase , ref , set} from "firebase/database";
import React from 'react';
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from './firebase';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
// const db = getDatabase(app);

const auth = getAuth(app);
function App() {

  const signUpUser = () => {
    createUserWithEmailAndPassword(
      auth , 
      'kamparapusriram@gmail.com',
      "Sriram@693"
    ).then((value) => console.log(value));
  }
  // const putData = () => {
  //   set(ref(db , 'users/sriram') , {
  //     id:1,
  //     name:"Sriram K",
  //     age:21
  //   })
  // }
  return (
    <div className="App">
      <h1>Firebase React App</h1>
      {/* <button onClick={putData}>Put Data</button> */}
      {/* <button onClick={signUpUser}>Put Data</button> */}
      <SignUp />
      <SignIn />
    </div>
  )
}

export default App
