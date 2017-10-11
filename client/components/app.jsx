import React from 'react';
import { Route, Link } from 'react-router-dom'
import Tasks from './tasks';

const App = () => (
  <div className="app">
    <nav className="col">
      <ul className="navbar">
        <li><Link to="/tasks">Tasks</Link></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Categories</a></li>
      </ul>
    </nav>
    <div className="page-content">
      Pages here
      <Route path="/tasks" component={Tasks}/>
    </div>
  </div>
);

export default App;
