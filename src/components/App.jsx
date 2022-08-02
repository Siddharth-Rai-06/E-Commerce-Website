
import React, { useState } from "react";
import Products from "./Products/Products";
import Header from "./layout/Header";


function App(){

  const [cartItems,setCartItems]=useState([]);
  const [eventQueue, setEventQueue]=useState({
  id:"",
  type:""    
  })

  const handleAddItem =(item)=>{
    let items=[...cartItems]
    let index=items.findIndex(i => i.id===item.id)
    if(index>-1){
      items[index]=item
    }
    else{
      items.push(item)
    }
    setCartItems([...items])
  }

  const handleRemoveItem =(item)=>{
    let items=[...cartItems]
    let index=items.findIndex(i => i.id===item.id)
    if(items[index].quantity===0){
      items.splice(index,1)
    }
    else{
      items[index]=item;
    }
    setCartItems([...items])
}
//type=== -1 : decrease
//type=== 1 : increase
  const handleEventQueue=(id,type)=>{
    setEventQueue({
      id,type
    })
  }

  return (
  <div>
  <Header itemCount={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue} ></Header>
  <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState={eventQueue}></Products>
    
  </div>
  );
}

export default App;
