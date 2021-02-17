import React, { useState, useEffect } from 'react';

function Random(props) {
  
  const [search, setSearch] = useState("...");
  
  return (
    <button onClick={props.clickMe}>Katt</button>
  );
 
}
 
export default Random;