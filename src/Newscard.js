import React from 'react';
import './Newscard.css';

const Newscard = ({ mode, id, topic, title, text, link }) => {
  return (
    <div className={`card_${mode}`}>
      <h3 className={`myheading_${mode}`}>{title}</h3>
      <p className={`italictext_${mode}`}>#{id} in {topic} news</p>
      <p className={`myText_${mode}`}>{text}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="link">Read More...</a>
    </div>
  );
};

export default Newscard;
