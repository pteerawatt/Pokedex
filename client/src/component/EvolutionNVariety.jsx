import React from 'react';

let EvolutionNVariety = ({cat, data, searchPokemon}) => {

  const parseName = name => name.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');

  const handleClick = (e) => {
    searchPokemon(e.target.id);
  };
  
  return (
    <div>
      <div>{cat + ':'}</div>
      <div>
        {data.map(evo => {
          return evo === null ? null : (
            <div key={evo.id}>
              <img onClick={handleClick} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evo.id}.png`} alt={`image of ${evo.name}`} id={evo.id}/>
              <div>
                {parseName(evo.name)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EvolutionNVariety;