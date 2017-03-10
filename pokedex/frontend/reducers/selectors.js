export const selectPokemonItem = ({pokemonDetail}, itemId) => {
  let foundItem = {};

  for(let i = 0; i < pokemonDetail.items.length; i++){
    if (pokemonDetail.items[i].id === parseInt(itemId)) {
      foundItem = pokemonDetail.items[i];
    }
  }

	return foundItem;
};

export const selectAllPokemon = ({pokemon}) => (
  Object.keys(pokemon).map(id => pokemon[id])
);
