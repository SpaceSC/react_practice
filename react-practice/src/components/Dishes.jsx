import React from 'react';
import { dishes } from '../data/words'; // import data, name export (not export default) in words.js
import SingleDish from './SingleDish.jsx';

function Dishes() {
  
  return (
   
    <>
      <h2>Dishes</h2>
      {dishes.map((dish) => <SingleDish  key={`${dish.title}-${dish.description}`} dishName={dish.title} /> )}
     
    </>
  );
 
}
 
export default Dishes;

// give keys to what we create with map