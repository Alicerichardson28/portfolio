import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import About from './components/About'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path ="/" component={Navbar}/>
        <Route exact path ="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;
