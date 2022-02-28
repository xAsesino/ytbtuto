import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import { Route, Routes } from 'react-router';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

      <Route exact path="/" element={<Home/>} />
        
      </Routes>

      <Home/>

    </div>
  );
}

export default App;
