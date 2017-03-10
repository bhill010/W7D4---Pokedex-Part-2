import React from 'react';
import { Link } from 'react-router';


const PokemonIndexItem = (props) => {
  return (
    <li>
      <Link to={`/pokemon/${props.pokemon.id}`}>
        {props.pokemon.id}
        <img src={props.pokemon.image_url} width="30" height="30"/>
        {props.pokemon.name}
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
