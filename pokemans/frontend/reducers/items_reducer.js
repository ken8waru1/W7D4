import * as pokeActions from '../actions/pokemon_actions';
import { merge } from 'lodash';


const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = {};

  switch (action.type) {
    case pokeActions.RECEIVE_ONE_POKEMON:
      return merge({}, state, action.items);
    default:
      return state;

  }


};


export default itemsReducer;