import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Projects } from '../../lib/collections';
import { DynamicList } from './dynamic-list';
import ProjectItem from './project-item';

class ProjectsPage extends Component {
  _addProject() {
    const title = this._input.value;
    if (title != '')
      Meteor.call('projects.create', title, (err, id) => {
        if (err) console.warn(err);
        else this._input.value = '';
      });
  }

  _deleteProject(id) {
    Meteor.call('projects.delete', id, (err) => {
      if (err) console.warn(err);
    });
  }

  render() {
    return (
      <div className="full-page">
        <h1>Projects Page</h1>
        <DynamicList type="project" onInputRef={(el) => { this._input = el; }}
          onSubmit={() => this._addProject()}>
          { this.props.projects.map((project, i) => (
            <ProjectItem key={i} project={project}
              deleteProject={() => this._deleteProject(project._id)}/>
          )) }
        </DynamicList>
      </div>
    );
  }
}

export default withTracker((props) => {
  const projects = Projects.find().fetch();
  return { projects };
})(ProjectsPage);
