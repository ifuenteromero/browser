import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Route path ="/about" component ={About}/>
        <Route path = "/home" component = {Home} />
    </div>
  );
}

export default App;
