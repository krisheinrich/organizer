import React from 'react';
import {PropTypes} from 'prop-types';

export const DynamicList = ({ type, items, placeholder, onInputRef, onSubmit }) => (
  <section className={`${type}-list`}>
    <ul>
    { items.map((item, i) => <li key={i}>{`${i} ${item.title}`}</li>) }
    </ul>
    <input ref={onInputRef} type="text"
      placeholder={placeholder || `Create a new ${type}`}
    />
    <button onClick={onSubmit}>Add {type}</button>
  </section>
);

DynamicList.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onInputRef: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
