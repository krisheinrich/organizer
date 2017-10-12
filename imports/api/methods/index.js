import { createProject } from './projects';
import { createTask } from './tasks';

Meteor.methods({
  ['projects.create']: createProject,
  ['tasks.create']: createTask,
});
