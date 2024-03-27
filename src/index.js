import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

// Create the store
const store = createStore(reducer, middleware);
console.log('State after createStore function: ', store.getState());

// Render the app to the DOM
// The Provider component makes the Redux store available to any nested components that have been wrapped in the connect() function
// The Router component makes the routing functionality available to the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
