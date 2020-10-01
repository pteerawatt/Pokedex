import React from 'react';

let History = ({ searchPokemon, history }) => {

  return (
    <div>
      <h3>Search History</h3>
      <div>
        {history.map((name, i)=> {
          return (
            <div key={i} onClick={() => searchPokemon(name)}>
              {name}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default History;
