import { useState } from 'react';

import './css/Gallery.css';

function Gallery({ images }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentClassName, setCurrentClassName] = useState("gallery__image");

    const setValues = (index) => {
        setCurrentImage(index);
        setIsExpanded(true);
    }

    const handleClick = (index) => {
        setValues(index);
        setCurrentImage(images[index]);
        setCurrentClassName("gallery__image" + images[index].name);
    }

    const handleExit = () => {
        setIsExpanded(false);
    }

    let className = "";
    return (
        <div className="gallery">
            <div className="gallery__images">
                {images.map((image, index) => (
                    className = currentClassName==="gallery__image" + image.name ? "active" : "hidden",
                    <>
                        <img className={`gallery__image ${className}`}
                            key={index}
                            name={image.name}
                            src={image.url}
                            alt={image.alt}
                            onClick={() => 
                                {
                                    handleClick(index);
                                    console.log("image: "+currentImage.name);
                                }
                            }                                  
                        />
                        
                    {currentClassName==="gallery__image" + image.name ? <p className="picture__label">{image.name}</p > : ""}
                    </>
                ))}
            
            </div>
            
            {isExpanded && (
                <div className="gallery__modal" onClick={handleExit}>
                </div>
            )}
        </div>
    );
}

export default Gallery;

