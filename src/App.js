import React from 'react';
import Home from './components/Home'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Router>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/blogs" component={Blogs}/>
        <Route exact path ="/projects" component={Projects}/>
      </Router> */}
    </div>
  );
}

export default App;
