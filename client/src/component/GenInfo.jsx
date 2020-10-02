import React from 'react';
import ScrollBox from './ScrollBox.jsx';

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
  const locations = firstUpper(info.locations);
  const abilities = firstUpper(info.abilities);
  const moves = firstUpper(info.moves);

  return (
    <div>
      <h2 className="secondary-headers">{parseName}</h2>
      <img className="main-image" src={imageUrl} alt={`image of ${info.name}`} style={{backgroundColor: `${info.color}`}}/>
      <div>
        <h3 className="secondary-headers">Pokédex data</h3>
        <div>{`Genders: ${gender(info.genders)}`}</div>
        <div>{`Color: ${info.color}`}</div>
        <div>{`Types: ${types}`}</div>
        <div className="scrollbox-wrapper">
          <ScrollBox name={'Abilities'} arr={abilities}/>
          <ScrollBox name={'Moves'} arr={moves}/>
          <ScrollBox name={'Locations'} arr={locations}/>
        </div>
      </div>
    </div>
  )
};

export default React.memo(Geninfo);
