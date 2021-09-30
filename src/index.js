import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

fetch('http://localhost:8000/api/homepage/background')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
