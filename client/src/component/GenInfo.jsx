import React from 'react';
import ScrollBox from './ScrollBox.jsx';
import EvolutionNVariety from './EvolutionNVariety.jsx'

const Geninfo = ({info, searchPokemon}) => {
  
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
      <h2 className="secondary-headers general-box-shadow">{parseName}</h2>
      <div className="images-wrapper">
        <img className="main-image general-box-shadow" src={imageUrl} alt={`image of ${info.name}`} style={{backgroundColor: `${info.color}`}}/>
        <div className="evo-var-wrapper">
          <EvolutionNVariety data={info.evolution} searchPokemon={searchPokemon} cat={'Evolution'}/>
          <EvolutionNVariety data={info.varieties} searchPokemon={searchPokemon} cat={'Varieties'}/>
        </div>
      </div>
      <div>
        <h3 className="secondary-headers general-box-shadow">Pokédex data</h3>
        <div className="gen-col-typ-wrapper general-box-shadow">
          <div>{`Genders: ${gender(info.genders)}`}</div>
          <div>{`Color: ${info.color}`}</div>
          <div>{`Types: ${types}`}</div>
        </div>
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
