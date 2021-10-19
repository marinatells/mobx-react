import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import MobxApp from './pages/AppMobX/App';

import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>      
      <BrowserRouter>
        <div style={{display: 'flex'}}>
          <NavLink to="/context" style={{marginRight: '20px'}}>
            Контекст
          </NavLink>

          <NavLink to="/mobx">
            MobX
          </NavLink>
        </div>
       
        <Switch>
          <Route path="/context">
            <App />
          </Route>
          <Route path="/mobx">
            <MobxApp />
          </Route>
          <Redirect to="/context" />
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);