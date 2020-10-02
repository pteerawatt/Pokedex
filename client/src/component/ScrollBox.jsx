import React from 'react';

const ScrollBox = ({name, arr}) => {

  return (
    <div>
      <div className="scrollheader">
        {name}
      </div>
      <div className="scrollbox">
        {arr.map((e, i) => {
          return (
            <div className="scrollitem" key={i}>
              {e}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(ScrollBox);
