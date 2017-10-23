import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Tasks from './tasks';
import Projects from './projects';
import Categories from './categories';

const App = () => (
  <div className="app">
    <nav className="col">
      <ul className="navbar">
        <li><NavLink to="/tasks" activeClassName="active">Tasks</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink to="/categories" activeClassName="active">Categories</NavLink></li>
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
