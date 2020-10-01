import React from 'react';

const Geninfo = ({info}) => {

  let parseName = info.name.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
  let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`
  let types = info.types.join(' ')
  return (
    <div>
      <h2>{parseName}</h2>
      <img src={imageUrl} alt={`image of ${info.name}`}/>
      <div>
        <h3>Pokédex data</h3>
        <div>{`Color: ${info.color}`}</div>
        <div>{`Types: ${types}`}</div>
      </div>
    </div>
  )
};

export default Geninfo;