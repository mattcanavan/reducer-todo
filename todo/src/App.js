import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <h2>Add items below to build out ToDo list.</h2>
      <TodoList />
    </div>
  );
}

export default App;
