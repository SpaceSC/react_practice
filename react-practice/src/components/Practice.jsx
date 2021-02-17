import { useState, useEffect } from 'react';
import '../practice.css';
import Cats from './Cats';
import Dishes from './Dishes';
import Input from './Input';
import Random from './Random';

function Practice() {
  const [backColor, setbackColor] = useState("green");
  const randomColor = "#" + Math.random().toString(16).substr(-6);
  return (
    <div className="practice" style={{backgroundColor: backColor }}>
      <h1>Practice</h1>
      <Cats />
      <Dishes />
      <Input />
      <Random clickMe={() => setbackColor(randomColor)}/>
      
    </div>
  );
}

export default Practice;

// onChange={(e) => setSearch(e.target.value)}
//