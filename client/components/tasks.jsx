import React, { Component } from 'react';

class Tasks extends Component {
  render() {
    return (
      <div className="row center">
        <input type="text" placeholder="Enter a task" />
        <button>Add</button>
      </div>
    );
  }
}

export default Tasks;
