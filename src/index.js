import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import temporaryData from './tempSources.js';

const getSources = (source = 'server') => {
  switch (source) {
    case 'server':
      return fetch('http://localhost:8000/api/homepage/background').then((response) =>
        response.json(),
      );
    case 'local':
      return new Promise((resolve) => {
        resolve(temporaryData);
      });

    default:
      throw new Error('can not define data source');
  }
};

getSources('local')
  .then((data) => {
    const {
      backgrounds,
      texts: { introText, navElements, footerElements, popupData, buttonTexts },
    } = data;

    const backgroundImgs = backgrounds.reduce(
      (acc, value) => {
        acc.allIDs = [...acc.allIDs, value.id];
        acc.byID[value.id] = { ...value };
        return acc;
      },
      { allIDs: [], byID: {} },
    );

    const navElementsProcessed = navElements.reduce(
      (acc, value) => {
        acc.allIDs = [...acc.allIDs, Number(value.id)];
        acc.byID[value.id] = { ...value };
        return acc;
      },
      { allIDs: [], byID: {} },
    );

    const footerElementsProcessed = footerElements.reduce(
      (acc, value) => {
        acc.allIDs = [...acc.allIDs, Number(value.id)];
        acc.byID[value.id] = { ...value };
        return acc;
      },
      { allIDs: [], byID: {} },
    );

    ReactDOM.render(
      <React.StrictMode>
        <App
          data={{
            backgroundImgs,
            introText,
            navElements: navElementsProcessed,
            footerElements: footerElementsProcessed,
            popupData,
            buttonTexts,
          }}
        />
      </React.StrictMode>,
      document.getElementById('root'),
    );
  })
  .catch((e) => console.log('errors', e));

reportWebVitals();
