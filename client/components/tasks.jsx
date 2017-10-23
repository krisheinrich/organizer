import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../../lib/collections';
import { DynamicList } from './dynamic-list';
import TaskItem from './task-item';

class TasksPage extends Component {
  _addTask() {
    const title = this._input.value;
    if (title == '')
      return console.warn("Task must not be blank");

    Meteor.call('tasks.create', title, (err, id) => {
      if (err) console.warn(err);
      else this._input.value = '';
    });
  }

  _deleteTask(id) {
    Meteor.call('tasks.delete', id, (err) => {
      if (err) console.warn(err);
    });
  }

  _toggleCompleted(id) {
    Meteor.call('tasks.toggleCompleted', id, (err) => {
      if (err) console.warn(err);
    });
  }

  render() {
    return (
      <div className="full-page">
        <h1>Tasks Page</h1>
        <DynamicList type="task" onInputRef={(el) => { this._input = el; }}
          onSubmit={this._addTask.bind(this)}>
          { this.props.tasks.map((task, i) => (
            <TaskItem key={i} task={task}
              toggleCompleted={() => this._toggleCompleted(task._id)}
              deleteTask={() => this._deleteTask(task._id)} />
          )) }
        </DynamicList>
      </div>
    );
  }
}

export default withTracker((props) => {
  const tasks = Tasks.find().fetch();
  return { tasks };
})(TasksPage);
