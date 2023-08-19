import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';
import Userform from './features/Auth/components/parts/UserForm';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Userform />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
