import React from 'react';
import { cats } from '../data/cats'; // import data
import SingleCat from './SingleCat';

function Cats() {
  
  return (
   
    <div className="catcontainer">
      <h2>Cats</h2>
      <div>
      {cats.map((item) => <SingleCat catName={item.name} key={item.id}/>)}
      </div>
    </div>
  );
 
}
 
export default Cats;

// key should be unique id, shouldn't be the index
// we map here, give key here to every SingleCat component