import { createProject, deleteProject } from './projects';
import { createTask, deleteTask, toggleCompleted } from './tasks';
import { createTag, deleteTag } from './tags';

Meteor.methods({
  ['tasks.create']: createTask,
  ['tasks.toggleCompleted']: toggleCompleted,
  ['tasks.delete']: deleteTask,
  ['projects.create']: createProject,
  ['projects.delete']: deleteProject,
  ['tags.create']: createTag,
  ['tags.delete']: deleteTag,
});
