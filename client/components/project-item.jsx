import React from 'react';

const ProjectItem = ({ project, deleteProject }) => {
  return (
    <li className="list-item">
      { project.title }
      <i className="fa fa-times" onClick={deleteProject} />
    </li>
  );
}

export default ProjectItem;
