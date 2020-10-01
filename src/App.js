import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import About from './components/About'
import Blogs from './components/Blogs'
import Projects from './components/Projects'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path ="/" component={Navbar}/>
        <Route exact path ="/about" component={About}/>
        <Route exact path ="/blogs" component={Blogs}/>
        <Route exact path ="/projects" component={Projects}/>
      </Router>
    </div>
  );
}

export default App;
