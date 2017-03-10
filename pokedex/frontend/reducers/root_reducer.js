import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer.js';
import pokemonDetailReducer from './pokemon_detail_reducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  pokemonDetail: pokemonDetailReducer
});

export default rootReducer;
