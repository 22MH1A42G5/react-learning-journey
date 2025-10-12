import React , { useEffect , useState} from 'react';
import './App.css';
import {getPosts , getRandomUser} from './api';
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';

function App() {
  const [data , setData] = useState(null);
  const [users , setUsers] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts));
  },[])

  useEffect(() => {
    getRandomUser().then((users) => setUsers(users.results[0]));
  } , [])

  function getNewUser(){
    getRandomUser().then((users) => setUsers(users.results[0]));
  }

  return (
    <div className="App">
      {
        // data ? data.map((e,i) => <PostCard key={i} title = {e.title} body = {e.body}/>) : <p>No Data</p>
        users ? <UserCard title = {users} onClick = {getNewUser} /> : <p>No data</p>
      }
    </div>
  );
}

export default App;
