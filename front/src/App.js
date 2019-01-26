import React, { Component } from 'react';
import {PersistGate} from 'redux-persist/es/integration/react'
import {Provider} from 'react-redux'
import {persistor,store} from './store'
import FCRoute from "./route/FCRoute";
import './App.css';
import {LocaleProvider} from 'antd'
import locale from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';

// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
              <PersistGate persistor={persistor}>
                  <LocaleProvider locale={locale}>
                      <FCRoute />
                  </LocaleProvider>
              </PersistGate>
          </Provider>

      </div>
    );
  }
}

export default App;
