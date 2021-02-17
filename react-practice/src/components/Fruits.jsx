function Fruits(props) {

  return (
    <div className="fruit" id={props.fruitId}>
      {props.fruitContent}
    </div>
  );

}

export default Fruits;