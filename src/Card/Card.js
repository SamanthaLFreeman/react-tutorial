import React from 'react';

const Card = ({pokemon, nextPokemon}) => {
  return (
    <article>
      { pokemon.sprites && <img src={pokemon.sprites.front_default} alt={pokemon.name} /> }
      <h2>{pokemon.name}</h2>
      <button onClick={(e) => nextPokemon(pokemon.id + 1, e)}>Thank you, Next</button>
    </article>
  )
}

export default Card;