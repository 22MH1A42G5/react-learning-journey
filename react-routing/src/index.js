import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Routes , Route , useParams} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1> About Page </h1>
    </div>
  )
}

const Profile = () => {
  return (
    <div>
      <h1> Profile Page</h1>
    </div>
  )
}
const Settings = () => {
  return (
    <div>
      <h1> Settings Page</h1>
    </div>
  )
}

const SayUser = () => {
  const params = useParams();
  console.log("params" , params);

  return (
    <div>
      <h1> Your Name is {params.userName}</h1>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/account/profile" element = {<Profile />} />

        <Route path="/user/:userName" element = {<SayUser />} />

        <Route path = "/account">
          <Route path = "settings" element = {<Settings />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
