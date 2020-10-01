import React from 'react';

let Evolution = ({evolution}) => {

  const parseName = name => name.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');

  return (
    <div>
      <div>Evolution</div>
      <div>
        {evolution.map(evo => {
          return (
            <div key={evo.id}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evo.id}.png`} alt={`image of ${evo.name}`}/>
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

export default Evolution;