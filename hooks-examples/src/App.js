import React ,{useEffect, useState} from 'react';
import MyComponent from './components/MyComponent';
import './App.css';
import Timer from './components/Timer';

function App() {
  // useEffect(()=>{
  //   console.log("App Component is Mounting...")
  // }, [])
  // const [isVisible , setVisible] = useState(true);

  return (
    <div className='App'>
      {/* {isVisible ? <MyComponent /> : <></>}
      <button onClick={ () => setVisible(!isVisible)}>Toggle</button> */}
      <Timer /> 
    </div>
  );
}

export default App;
