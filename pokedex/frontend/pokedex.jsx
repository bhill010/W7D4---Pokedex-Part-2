import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions.js';
import * as APIUtil from './util/api_util.js';
import configureStore from './store/store.js';
import selectAllPokemon from './reducers/selectors.js';
import Root from './components/root.jsx';

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = APIUtil.fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  window.store = store;
  ReactDOM.render(<Root store={store} />, rootEl);
});
