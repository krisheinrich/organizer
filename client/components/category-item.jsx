import React from 'react';

const CategoryItem = ({ category, deleteCategory }) => {
  return (
    <li className="list-item">
      { category.title }
      <i className="fa fa-times" onClick={deleteCategory} />
    </li>
  );
}

export default CategoryItem;
