import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux"
import { List } from './pages/List';
import { Basic } from './pages/Basic';
import { Home } from './pages/Home';
import { WebApp } from './pages/WebApp';
import store from './store';

function App() {
  return (
    <div>
      <List />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/basic"><Basic /></Route>
        <Route path="/webApp"><WebApp /></Route>
      </Switch>
    </div>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);