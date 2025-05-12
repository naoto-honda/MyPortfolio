import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // TailwindCSSやその他のスタイルが適用される場所

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
