import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Projects } from '../../lib/collections';
import { DynamicList } from './dynamic-list';

class ProjectsPage extends Component {
  _addProject() {
    const title = this._input.value;
    if (title != '')
      Meteor.call('projects.create', title, (err, id) => {
        if (err)
          console.warn(err);
        else
          this._input.value = '';
      });
  }

  _inputRef(el) {
    this._input = el;
  }

  render() {
    return (
      <div className="full-page">
        <h1>Projects Page</h1>
        <DynamicList type="project"
          items={this.props.projects}
          onSubmit={this._addProject.bind(this)}
          onInputRef={this._inputRef.bind(this)}
        />
      </div>
    );
  }
}

export default withTracker((props) => {
  const projects = Projects.find().fetch();
  return { projects };
})(ProjectsPage);
