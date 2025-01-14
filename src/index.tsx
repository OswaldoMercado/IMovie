import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './AppWrapper';
import {Provider} from 'react-redux';
import store from './redux/store';


ReactDOM.render(
<Provider store={store}>
    <AppWrapper />
</Provider>
,
  document.getElementById('root')
);


