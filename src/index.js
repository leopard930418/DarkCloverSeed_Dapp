import React from "react";
import { render } from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import "./index.css";
import App from "./App";
import configureStore from './store';

const preloadedState = {
  ...(JSON.parse(localStorage.getItem("Hat")) ?? {})
}

const store = configureStore(preloadedState);

store.subscribe(() => {
  const storeData = store.getState();
  window.localStorage.setItem("Hat", JSON.stringify(storeData));
});


const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
