import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RenderIf from './components/RenderIf';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <RenderIf />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
