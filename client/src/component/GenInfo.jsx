import React from 'react';

const Geninfo = ({info}) => {
  
  // upper case first letter of every word in array. Returns array.
  const firstUpper = arr => arr.map(e => e[0].toUpperCase() + e.slice(1));

  const gender = (genders) => {
    if (genders === -1) return 'genderless';
    else if (genders === 0) return '100% male';
    else if (genders === 8) return '100% female';
    else return `${((8 - genders)/8)*100}% male, ${(genders/8)*100}% female`;
  };

  const parseName = firstUpper(info.name.split('-')).join(' ');
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`;
  const types = info.types.join(', ');
  const locations = info.locations.length !== 0 ? firstUpper(info.locations).join(', ') : 'Cannot be found in the wild';
  const abilities = firstUpper(info.abilities).join( ', ');
  const moves = firstUpper(info.moves).join(', ');

  return (
    <div>
      <h2>{parseName}</h2>
      <img src={imageUrl} alt={`image of ${info.name}`}/>
      <div>
        <h3>Pokédex data</h3>
        <div>{`Genders: ${gender(info.genders)}`}</div>
        <div>{`Color: ${info.color}`}</div>
        <div>{`Types: ${types}`}</div>
        <div>{`Locations: ${locations}`}</div>
        <div>{`Abilities: ${abilities}`}</div>
        <div>{`Moves: ${moves}`}</div>
      </div>
    </div>
  )
};

export default Geninfo;
