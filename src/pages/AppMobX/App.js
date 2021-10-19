import React from 'react';
import { Provider } from 'mobx-react';

import Books from '../../components/Books';
import Films from '../../components/Films';
import store from '../../store';

import './App.css';

function App() {
  return (
    <Provider {...store}>
      <h1>MobX</h1>
      <Films />
      <Books />
    </Provider>
  );
}

export default App;
