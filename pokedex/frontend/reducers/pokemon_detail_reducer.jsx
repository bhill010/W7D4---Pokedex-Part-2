import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = {
  items: []
};

const pokemonDetailReducer = (state= defaultState, action) => {
  // const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
      // newState.name = action.pokemon.name;
      // return newState;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
