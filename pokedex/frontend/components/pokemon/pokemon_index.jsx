import React from 'react';
import PokemonIndexContainer from './pokemon_index_container';
import PokemonIndexItem from './pokemon_index_item';


export class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  pokemonItems() {
     return this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
  }


  render(){
    return (
      <div>
        {this.props.children}
        <ul>
          { this.pokemonItems() }
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
