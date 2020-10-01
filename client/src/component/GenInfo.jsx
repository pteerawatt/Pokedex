import React from 'react';

const Geninfo = ({info}) => {
  
  // upper case first letter of every word in array. Returns array.
  const firstUpper = arr => arr.map(e => e[0].toUpperCase() + e.slice(1));

  const parseName = firstUpper(info.name.split('-')).join(' ')
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`

  const gender = (genders) => {
    if (genders === -1) return 'genderless';
    else if (genders === 0) return '100% male';
    else if (genders === 8) return '100% female';
    else return `${((8 - genders)/8)*100}% male, ${(genders/8)*100}% female`;
  }

  const types = info.types.join(', ')
  const abilities = firstUpper(info.abilities).join( ', ')

  return (
    <div>
      <h2>{parseName}</h2>
      <img src={imageUrl} alt={`image of ${info.name}`}/>
      <div>
        <h3>Pokédex data</h3>
        <div>{`Genders: ${gender(info.genders)}`}</div>
        <div>{`Color: ${info.color}`}</div>
        <div>{`Types: ${types}`}</div>
        <div>{`Abilities: ${abilities}`}</div>
      </div>
    </div>
  )
};

export default Geninfo;