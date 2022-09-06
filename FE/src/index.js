import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AppContext } from './services/appContext';

import './i18n';

// Antd Styling
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.less';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
