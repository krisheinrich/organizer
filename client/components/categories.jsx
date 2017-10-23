import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tags } from '../../lib/collections';
import { DynamicList } from './dynamic-list';
import CategoryItem from './category-item';

class CategoriesPage extends Component {
  _addTag() {
    const title = this._input.value;
    if (title != '')
      Meteor.call('tags.create', title, (err, id) => {
        if (err) console.warn(err);
        else this._input.value = '';
      });
  }

  _deleteCategory(id) {
    Meteor.call('tags.delete', id, (err) => {
      if (err) console.warn(err);
    });
  }

  render() {
    return (
      <div className="full-page">
        <h1>Categories page</h1>
        <DynamicList type="category" onInputRef={(el) => { this._input = el; }}
          onSubmit={this._addTag.bind(this)}>
          { this.props.tags.map((tag, i) => (
            <CategoryItem key={i} category={tag}
              deleteCategory={() => this._deleteCategory(tag._id)}/>
          )) }
        </DynamicList>
      </div>
    );
  }
}

export default withTracker((props) => {
  const tags = Tags.find().fetch();
  return { tags };
})(CategoriesPage);
