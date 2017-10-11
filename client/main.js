import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/app';

Meteor.startup(() => {
  Meteor.subscribe('tasks');
  Meteor.subscribe('projects');
  Meteor.subscribe('tags');

  ReactDOM.render((<Router>
    <App />
  </Router>), document.getElementById('react-root'));
});
