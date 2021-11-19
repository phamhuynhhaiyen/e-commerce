import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import './scss/index.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

