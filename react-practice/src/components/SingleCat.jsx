import React from 'react'; 

function SingleCat(props) {

  
  return (
    <div className="catcontainer">
      <h1>Practice</h1>
      <div>
        {props.catsObject.map((item, index)=> 
          <p key={item.id}>{item.id}</p>)}
      </div>
    </div>
  );
 
}
 
export default SingleCat;

// key should be unique id, shouldn't be the index