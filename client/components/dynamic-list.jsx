import React from 'react';
import { PropTypes } from 'prop-types';

export const DynamicList = ({
  children, type, items, placeholder, onInputRef, onSubmit, onCheck, onDelete
}) => (
  <section className={`dyn-list ${type}-list`}>
    <ul>
      { children }
    </ul>
    <div className="row">
      <input ref={onInputRef} type="text" placeholder={placeholder || `Create a new ${type}`} />
      <button onClick={onSubmit}>Add {type}</button>
    </div>
  </section>
);

DynamicList.propTypes = {
  type: PropTypes.string.isRequired,
  onInputRef: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
