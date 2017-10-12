import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Tasks, Projects } from '../../../lib/collections';

export const createTask = (title, projectId) => {
  check(title, String);
  const task = {
    title,
    projectId,
    url: [],
  };
  Tasks.insert(task);
};
