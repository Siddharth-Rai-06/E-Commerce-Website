import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Loader from "../UI/Loader";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSLider=({slides})=>{

    const [current,setCurrent]=useState(0);
    const [loader, setLoader] = useState(true);
    const length=slides.length
    

    const nextSlide=()=>{
        setCurrent(current === length-1?0 : current+1)
    }
    const prevSlide=()=>{
        setCurrent(current === 0?length-1: current-1)
    }
    const handleLoader=()=>{
        setLoader(false);
    }


    return (
        <>
        <section className="slider" onLoad={handleLoader}>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {SliderData.map((slide , index)=>{
                return (
                    <div className={index === current ? 'slide-active':'slide'} key={index}>
                    {index === current && ( <img src={slide.image} alt="shoe image" className="image"></img>)}
                   
                    </div>
                    )
                    
                
            })}
        </section>
        {loader && <Loader />}

        </>
    )
}

export default ImageSLider;