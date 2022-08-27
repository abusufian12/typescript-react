import React from 'react';
import logo from './logo.svg';
import './App.css';

function add(a: number, b: number){
  return a + b;
}

function App() {
  return (
    <div className="App">
      <h2>Welcome to React and Typescript</h2>
      <p>{add(10, 15)}</p>
    </div>
  );
}

export default App;
