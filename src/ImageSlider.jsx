import { useEffect, useRef, useState, useCallback } from 'react'

import './css/ImageSlider.css'




function ImageSlider({slides}) {
        const timeRef = useRef(null);
        const [index, setIndex] = useState(0);
        const [dotsName, setDotsName] = useState("");

        

        const goPrevious = () => {
            
            {index === 0 ? setIndex(slides.length-1) : setIndex(index -1 )}
            
            
        };

        const goNext = useCallback(() => {

            {index === slides.length-1 ? setIndex(0) : setIndex(index + 1)}
           
            
        }, [index, slides]);

        const goSlide = (slideIndex) => {
            setIndex(slideIndex)
        };



        useEffect(() => {
            if (timeRef.current) {
                clearTimeout(timeRef.current);
            }
            console.log("use effect");
            timeRef.current = setTimeout(() => {
                goNext();
            }, 2000);

            return () => {
                clearTimeout(timeRef.current);
            };
        }, [goNext]);


        return (
        
            <div className="slide__container">
                <div className="left__arrow" onClick={goPrevious}> ❰ </div>
                <div className="right__arrow" onClick={goNext}> ❱ </div>
                <img className="slide__image" src={`${slides[index].url}`}/>
                <div className="dots__container">
                    {slides.map((_, slideIndex) => (
                        <div 
                        key={slideIndex} className={`dots" ${slideIndex === index ? dotsName : ""}`}
                        onClick={() => 
                            {goSlide(slideIndex);
                            setDotsName("dots__selected")}
                        }>
                            ●
                        </div>
                    ))}
                </div>
            </div>
        
        )
    
    
    }    
    export default ImageSlider
