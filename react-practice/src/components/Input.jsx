import React, { useState, useEffect } from 'react';

function Input(props) {
  
  const [search, setSearch] = useState("...");
  
  return (
   
    <div>
      <h2>I'm looking for {search}</h2>
      <input type="text" onChange={(e) => setSearch(e.target.value)}/>
    </div>
  );
 
}
 
export default Input;