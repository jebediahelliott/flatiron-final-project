import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';



fetch('/static_pages')
.then(res => res.json())
.then(res => {
  const initialState = []
  res.forEach((page) => {
    const obj = {}
    obj.id = page.id
    obj.title = page.title
    const pars = {}
    page.paragraphs.forEach((par, idx) => pars[idx] = par)
    obj.paragraphs_attributes = pars
    initialState.push(obj)
  })
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, {static: initialState}, composeEnhancers(applyMiddleware(thunk)))

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
})




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
