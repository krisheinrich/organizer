import React from 'react';
import { Route, Link } from 'react-router-dom';
import Tasks from './tasks';
import Projects from './projects';
import Categories from './categories';

const App = () => (
  <div className="app">
    <nav className="col">
      <ul className="navbar">
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
    <div className="page-content">
      <Route path="/tasks" component={Tasks}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/categories" component={Categories}/>
    </div>
  </div>
);

export default App;
