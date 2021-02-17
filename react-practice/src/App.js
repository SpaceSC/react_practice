import Fruits from './components/Fruits.jsx';
import Counter from './components/Counter.jsx';
import './App.css';

function App() {

  const fruits = [
    {
      id: "apple",
      content: "Alma"
    },
    {
      id: "pear",
      content: "Körte"
    },
    {
      id: "pineapple",
      content: "Ananász"
    },
    {
      id: "grape",
      content: "Szőlő"
    }
  ];
  
  return (
    <div className="App">
      {fruits.map((fruit) => {
        console.log(`fruit-${fruit.id}`); // keys should be strings
        return (
          <Fruits
            key={`fruit-${fruit.id}`}
            fruitId={fruit.id}
            fruitContent={fruit.content}>
          </Fruits>
          );
        })
      }
      <Counter />
      
    </div>
  );
 
}
 
export default App;


{/* without map()
      <Fruits fruitId={data[0].id} fruitContent={data[0].content}/>
      <Fruits fruitId={data[1].id} fruitContent={data[1].content}/>
      <Fruits fruitId={data[2].id} fruitContent={data[2].content}/>
      <Fruits fruitId={data[3].id} fruitContent={data[3].content}/>
      */}