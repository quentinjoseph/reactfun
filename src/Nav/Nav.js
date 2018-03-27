import React from 'react';


const nav = (props) => {

  return (
    <div onMouseOver={props.hover} onMouseOut={props.hover} className="nav" >
      <h1 style={props.scoop}><span role="img" aria-label="goofy face">🤪</span></h1>
    </div>
  )

}

export default nav;