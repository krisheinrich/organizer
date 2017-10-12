import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Projects } from '../../../lib/collections';

export const createProject = (title) => {
  check(title, String);
  const project = {
    title,
    url: [],
  };
  Projects.insert(project);
};
