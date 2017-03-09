import React from 'react';
import PokemonIndexContainer from './pokemon_index_container';


export class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.pokemon.map( (pokemon, idx) => (
            <li key={idx}>
              {pokemon.name}
              <img src={pokemon.image_url} alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
