import React from 'react'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import Button from './components/Button'
import CounterComponent  from './components/CounterComponent'
import './style.css'
const App = () => {
  return (
    <div class = 'todo-container'>
      <CounterComponent />
      <CounterComponent />
      <CounterComponent />
      <Header />
      <TodoItem text = "Eat"/>
      <TodoItem text = "Code"/>
      <TodoItem completed = {true} text = "Play"/>
      <TodoItem text = "Study"/>
      <TodoItem text = "Sleep Again"/>
      <Button />
    </div>
  );
};

export default App;
