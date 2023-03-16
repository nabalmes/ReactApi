import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import { Component } from './components/Component';
import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<Component/>}/>
            <Route path='/Component1' element={<Component1/>}/>
            <Route path='/Component2' element={<Component2/>}/>
        </Routes>
        <Nav />
      </div>
    </Router>

  );
}

export default App;
