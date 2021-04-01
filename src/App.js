import React from 'react';
import Home from './components/Home'
import './App.css';
import Blogs from './components/Blogs'
import { Route, Switch } from 'react-router-dom';




function App() {
  return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/blogs" exact component={Blogs}/>
        </Switch>
      </div>
  );
}

export default App;
