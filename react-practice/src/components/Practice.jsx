import { useState, useEffect } from 'react';
import '../index_practice.css';
import Cats from './Cats';
import Dishes from './Dishes';




function Practice() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Practice</h1>
      <Cats />
      <Dishes />
    </div>
  );
}

export default Practice;