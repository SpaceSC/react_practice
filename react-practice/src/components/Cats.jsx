import React from 'react';
import { cats } from '../data/cats'; // import data
import SingleCat from './SingleCat';

function Cats() {
  
  return (
    <SingleCat catsObject={cats}/>
  );
 
}
 
export default Cats;