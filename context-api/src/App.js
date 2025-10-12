// import { useContext } from 'react';
import './App.css';
import Counter from './components/Counter';
// import { ConterContext } from './context/Counter';
import { useDatabase } from './context/Counter';
// import { useContext } from 'react';

function App() {
  const counterState = useDatabase();
  // console.log(counterState)


  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
