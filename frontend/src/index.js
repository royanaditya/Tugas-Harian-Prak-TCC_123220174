import React from 'react';
import ReactDOM from 'react-dom/client'; // Ubah impor ini
import App from './App';
import "bulma/css/bulma.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
