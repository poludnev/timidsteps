import React from 'react';
import './footer.styles.css';
// import _ from 'lodash';
import classNames from 'classnames';
import { openInNewTab } from '../../utils';

export const Footer = (props) => {
  // console.log('footer props', props);
  const {
    footerElements,
    hoveredElementId,
    onMouseOverButton,
    onMouseOutButton,
    toggleModalHandler,
  } = props;

  const listHandler = ({ link, name: text }) => {
    return text === 'email' ? toggleModalHandler(text) : () => openInNewTab(link);
  };

  // console.log('footer elements', footerElements);

  return (
    <div className='Footer'>
      <div className='social-media-bar mt-1  d-flex justify-content-center'>
        {footerElements.allIDs.map((id) => {
          const isHovered = hoveredElementId === id;
          const spanClassNames = classNames(
            `m-0 py-${isHovered ? 0 : 1}`,
            // `m-md-${isHovered ? 1 : 2}`,
            `px-${isHovered ? 1 : 2}`,
          );
          const hover = footerElements.allIDs.includes(hoveredElementId) && isHovered;
          const unhover = footerElements.allIDs.includes(hoveredElementId) && !hover;
          const imgClassNames = classNames({ hover, unhover });
          const link = footerElements.byID[id].link;
          const name = footerElements.byID[id].name;
          const src = footerElements.byID[id].src;

          return (
            <div
              className={spanClassNames}
              style={{ margin: 0 }}
              type='button'
              key={id}
              onMouseOver={onMouseOverButton({ name, id })}
              onMouseOut={onMouseOutButton()}
              onClick={listHandler({ id, link, name })}
            >
              <img src={src} alt={name} className={imgClassNames} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
