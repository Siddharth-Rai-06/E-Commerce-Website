
import React, { useState } from "react";
import ImageSLider from "./slider/ImageSlider";
import Products from "./Products/Products";
import Header from "./layout/Header";
import { SliderData } from "./slider/SliderData";



function App(){

  return (
  <div>
  <Header></Header>
  <ImageSLider slides={SliderData}/>
  <Products></Products>
    
  </div>
  );
}

export default App;
