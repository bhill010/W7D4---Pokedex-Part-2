import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.pokemonDetail.name}
          <img src={this.props.pokemonDetail.image_url} width="30" height="30"/>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default PokemonDetail;

// {this.props.pokemonDetail.image_url}
