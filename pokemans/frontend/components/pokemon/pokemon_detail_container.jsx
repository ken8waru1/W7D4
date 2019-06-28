import React from 'react';
import { connect } from 'react-redux';

import PokemonDetail from './pokemon_detail';
import * as pokeActions from '../../actions/pokemon_actions';
import * as selectors from '../../reducers/selectors';


const mapSTP = (state,ownProps) => {
  
  const id = ownProps.match.params.pokemonId;
  // debugger
  return ({
    poke: selectors.selectOnePokemon(state, id)
  });
};

const mapDTP = (dispatch, ownProps) => {
  const id = ownProps.match.params.pokemonId;
  // debugger;

  return ({
    requestOnePoke: dispatch(pokeActions.requestOnePokemon(id))
  });
};


export default connect(mapSTP, mapDTP)(PokemonDetail);
