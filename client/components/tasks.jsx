import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../../lib/collections';
import { DynamicList } from './dynamic-list';

class TasksPage extends Component {
  _addTask() {
    const title = this._input.value;
    if (title != '')
      Meteor.call('tasks.create', title, (err, id) => {
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
        <h1>Tasks Page</h1>
        <DynamicList type="task" items={this.props.tasks} onSubmit={this._addTask.bind(this)}
          onInputRef={this._inputRef.bind(this)}/>
      </div>
    );
  }
}

export default withTracker((props) => {
  const tasks = Tasks.find().fetch();
  return { tasks };
})(TasksPage);
