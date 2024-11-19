import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { NavSwitchProvider } from './nav-context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavSwitchProvider>    
    <App />
    </NavSwitchProvider>
  </React.StrictMode>,
);
