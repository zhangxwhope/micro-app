import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoute from './router'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
      <App />
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// 子应用卸载
window.addEventListener('unmount', function () {
  // 卸载应用
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
