import React from 'react';
import './main.styles.css';
import { Heading } from '../heading/heading.component.jsx';
import { Intro } from '../intro/intro.component.jsx';
import { Navbar } from '../navbar/navbar.component.jsx';

export const Main = (props) => {
  // console.log(props);
  const {
    headingText,
    introText,
    navElements,
    hoveredElementId,
    onMouseOverButton,
    onMouseOutButton,
    toggleModalHandler,
  } = props;
  return (
    <div className='Main'>
      <Heading headingText={headingText} />
      <Intro introText={introText} />
      <Navbar
        navElements={navElements}
        handlers={{ onMouseOverButton, onMouseOutButton, toggleModalHandler }}
        hoveredElementId={hoveredElementId}
      />
    </div>
  );
};
