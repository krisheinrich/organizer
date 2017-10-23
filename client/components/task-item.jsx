import React from 'react';

const TaskItem = ({ task, toggleCompleted, deleteTask }) => {
  const { _id, title, status } = task;
  const checkedCls = `fa fa-${ status == 'complete' ? 'check-square-o' : 'square-o'}`;
  return (
    <li className="list-item">
      <span className="task-group">
        <i className={checkedCls} onClick={toggleCompleted} />
        { status == 'complete'
        ? <span className="completed">{ title }</span>
        : <span>{ title }</span> }
      </span>
      <i className="fa fa-times" onClick={deleteTask} />
    </li>
  );
}

export default TaskItem;
