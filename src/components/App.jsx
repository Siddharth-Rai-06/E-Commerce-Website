
import React, { useState } from "react";
import Products from "./Products/Products";
import Header from "./layout/Header";


function App(){

  const [cartItems,setCartItems]=useState(0);
  const handleAddItem =()=>{
      setCartItems(cartItems+1)
  }
  const handleRemoveItem =()=>{
    setCartItems(cartItems-1)
}

  return (
  <div>
  <Header count={cartItems}></Header>
  <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem}></Products>
    
  </div>
  );
}

export default App;
