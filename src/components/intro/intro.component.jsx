import React from 'react';
import './intro.styles.css';

export const Intro = (props) => {
  const { introText } = props;
  // console.log('introText', introText);
  return (
    <div className='Intro front-intro'>
      <p className='m-0 fs-6'>{`${introText[0]}`}</p>
      <p className='m-0 fs-6'>{`${introText[1]}`}</p>
    </div>
  );
};
