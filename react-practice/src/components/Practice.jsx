import { useState, useEffect } from 'react';
import '../index_practice.css';
import Cats from './Cats';


function Practice() {
  
  const [count, setCount] = useState(0);

  return (
    <div>
      <Cats />
    </div>
  );
}

export default Practice;