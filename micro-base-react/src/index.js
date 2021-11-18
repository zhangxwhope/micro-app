import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import microApp from '@micro-zoe/micro-app'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './router'

microApp.start({
  plugins: {
    modules: {
      'app1': [{
        loader(code) {
          if (code.indexOf('sockjs-node') > -1) {
            code = code.replace('window.location.port', '3000')
          }
          return code
        }
      }]
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function dataListener (data) {
  console.log('基座应用获取全局数据', data)
}

/**
 * 绑定监听函数
 * dataListener: 绑定函数
 * autoTrigger: 在初次绑定监听函数时有缓存数据，是否需要主动触发一次，默认为false
 */
microApp.addGlobalDataListener(dataListener, true)

