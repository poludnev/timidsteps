import React from 'react';
import './heading.styles.css';

export const Heading = (props) => {
  const { headingText } = props;

  return (
    <div className='Heading'>
      <h1 className=''>{headingText}</h1>
    </div>
  );
};
