
import React, { useState } from "react";
import Products from "./Products/Products";
import Header from "./layout/Header";


function App(){

  const [cartItems,setCartItems]=useState([]);

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

  return (
  <div>
  <Header itemCount={cartItems.length} items={cartItems}></Header>
  <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}></Products>
    
  </div>
  );
}

export default App;
