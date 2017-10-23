import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Tags } from '../../../lib/collections';

export const createTag = (title) => {
  check(title, String);
  const tag = {
    title,
    url: [],
  };
  Tags.insert(tag);
};

export const deleteTag = (tagId) => {
  check(tagId, String);
  const tag = Tags.findOne(tagId);
  if (!tag)
    return console.warn("Error: Failed to delete -- No tag found");

  Tags.remove(tagId);
};
