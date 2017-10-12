import { Meteor } from 'meteor/meteor';
import { Tasks, Projects, Tags } from '../lib/collections';
import '../imports/api/methods';

Meteor.startup(() => {
  Meteor.publish('tasks', () => Tasks.find());
  Meteor.publish('projects', () => Projects.find());
  Meteor.publish('tags', () => Tags.find());
});
