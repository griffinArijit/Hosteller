import { useState } from "react"
import "./slider.scss"

export default function Slider({images}){
    const [imageIndex , setimageIndex] = useState(null);
    return (
        <div className="slider">
            {imageIndex!==null&&<div className="fullSlider">
                <div className="arrow">
                    <img src="../../../public/arrow.png" alt="" 
                    onClick={()=>{imageIndex===0?setimageIndex(images.length - 1):setimageIndex(imageIndex-1)
                    }}/>
                </div>
                <div className="imageContainer">
                    <img src={images[imageIndex]} alt="" />
                </div>
                <div className="arrow">
                    <img src="../../../public/arrow.png" alt="" className="right" onClick={()=>setimageIndex((imageIndex+1)%images.length)}/>
                </div>
                <div className="close" onClick={()=>setimageIndex(null)}>X</div>
            </div>}
            <div className="bigImage" >
                <img src={images[0]} alt="" onClick={()=>setimageIndex(0)}/>
            </div>
            <div className="smallImages">
                {images.map((image,index)=>(
                        index>0&&<img src={image} key={index} onClick={()=>setimageIndex(index)}></img>
                    ))}
            </div>
        </div>
    )
}