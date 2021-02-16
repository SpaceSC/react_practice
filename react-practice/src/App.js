import Fruits from './Fruits.jsx';
import './App.css';

function App() {

  const data = [
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
      {data.map((data) => {
        console.log(`fruit-${data.id}`); // keys should be strings
        return (
          <Fruits
            key={`fruit-${data.id}`}
            fruitId={data.id}
            fruitContent={data.content}>
          </Fruits>
          );
        })
      }

      {/* without map()
      <Fruits fruitId={data[0].id} fruitContent={data[0].content}/>
      <Fruits fruitId={data[1].id} fruitContent={data[1].content}/>
      <Fruits fruitId={data[2].id} fruitContent={data[2].content}/>
      <Fruits fruitId={data[3].id} fruitContent={data[3].content}/>
      */}
    </div>
  );
 
}
 
export default App;
