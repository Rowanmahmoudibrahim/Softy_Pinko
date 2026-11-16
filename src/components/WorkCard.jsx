
import React from 'react';

const WorkCard = ({ image, title, description }) => {
  return (
    <div className="rocket">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default WorkCard;
