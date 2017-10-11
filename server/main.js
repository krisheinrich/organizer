import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('tasks');
export const Projects = new Mongo.Collection('projects');
export const Tags = new Mongo.Collection('tags');

Meteor.startup(() => {
  Meteor.publish('tasks', () => Tasks.find());
  Meteor.publish('projects', () => Projects.find());
  Meteor.publish('tags', () => Tags.find());
});
