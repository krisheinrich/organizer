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

export const deleteProject = (projectId) => {
  check(projectId, String);
  const project = Projects.findOne(projectId);
  if (!project)
    return console.warn("Error: Failed to delete -- No project found");

  Projects.remove(projectId);
};
