import React from 'react';
import './navbar.styles.css';
import { openInNewTab } from '../../utils';
import classNames from 'classnames';

export const Navbar = (props) => {
  const { navElements, handlers, hoveredElementId } = props;
  const { onMouseOverButton, onMouseOutButton, toggleModalHandler } = handlers;
  // console.log(navElements);
  const listHandler = ({ link, text }) =>
    text === 'about me' || text ? toggleModalHandler(text) : () => openInNewTab(link);
  // text === 'about me' ? toggleModalHandler : () => openInNewTab(link);

  return (
    <div className='Navbar front-nav-bar d-flex justify-content-center'>
      <ul className='nav navbar list-group list-group-horizontal m-0'>
        {navElements.allIDs.map((id) => {
          const isHovered = hoveredElementId === id;
          const hover = navElements.allIDs.includes(hoveredElementId) && isHovered;
          const className = classNames('list-group-item', { hover });
          const link = navElements.byID[id].link;
          const text = navElements.byID[id].text;

          return (
            <li
              key={id}
              className={className}
              type={'button'}
              onMouseOver={onMouseOverButton({ id })}
              onMouseOut={onMouseOutButton()}
              onClick={listHandler({ id, link, text })}
            >
              {text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
