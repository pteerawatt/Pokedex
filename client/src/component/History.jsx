import React from 'react';

let History = ({ searchPokemon, history }) => {

  return (
    <div className="history-wrapper">
      <div className="scrollheader">Search History</div>
      <div className="scrollbox">
        {history.map((name, i)=> {
          return (
            <div className="scrollitem" key={i} onClick={() => searchPokemon(name)}>
              {name}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default React.memo(History);
