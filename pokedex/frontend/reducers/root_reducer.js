import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer.js';

const rootReducer = combineReducers({
  pokemon: pokemonReducer
});

export default rootReducer;
