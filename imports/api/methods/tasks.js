import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Tasks, Projects } from '../../../lib/collections';

export const createTask = (title, projectId) => {
  check(title, String);
  const task = {
    title,
    projectId,
    status: 'incomplete',
    url: [],
    created: Date.now(),
  };

  Tasks.insert(task);
};

export const deleteTask = (taskId) => {
  check(taskId, String);
  const task = Tasks.findOne(taskId);
  if (!task)
    return console.warn("Error: Failed to delete -- No task found");

  Tasks.remove(taskId);
};

export const toggleCompleted = (taskId) => {
  check(taskId, String);
  const task = Tasks.findOne(taskId);
  if (!task)
    return console.warn("Error: Failed to change status -- No task found");

  const newStatus = task.status == 'incomplete' ? 'complete' : 'incomplete';
  Tasks.update(taskId, { $set: { status: newStatus }});
}
