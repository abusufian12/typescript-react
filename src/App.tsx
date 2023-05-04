import React from 'react';
import logo from '../public/logo192.png';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';
import Navigation from './components/Navigation';
import Home from "./components/pages/Home";

function add(a: number, b: number){
  return a + b;
}

function App() {
  return (

    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    
  );
}

export default App;
