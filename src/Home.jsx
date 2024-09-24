import { useState } from "react";
import ImageSlider from "./ImageSlider";
import VerticalNav from "./VerticalNav";
import MainContent from "./MainContent";


import './css/Home.css';


import spaceNeedle from './images/thom-milkovic-skUTVJi8-jc-unsplash.jpg';
import publicMarket from './images/ben-dutton-16ziVZtz8vA-unsplash.jpg';
import hiking from './images/aaron-thomas-IYcIITCTbVs-unsplash.jpg';
import Cherryblossoms from './images/lokesh-masania-UwkKj6461fw-unsplash.jpg';



function Home({ setPage }) {
    const slides = [  
        {
            name: "Space Needle",
            url: spaceNeedle,
            alt: "aerial-photography-of-seattle-skyline",
    
        }
        ,
        {
            name: "Public Market",
            url: publicMarket,
            alt: "public-market-farmers-market-led-sign",
    
        }
        ,
        {
            name: "Hiking",
            url: hiking,
            alt: "a man is hiking in the mountain",
    
        }
        ,
        {
            name: "Cherry Blossoms",
            url: Cherryblossoms,
            alt: "a cherry blossom tree",
    
        }
    
    ];

    const [mainContents, setMainContents] = useState('Attractions');

    const [readMoreText, setReadMoreText] = useState('Home');

    function onReadMore(e) {
        e.preventDefault();
        setReadMoreText("clicked successfully!");
        console.log(readMoreText);
    }


    return (
        <>
            <div className="slides__container">
                <ImageSlider slides={slides}/>
            </div>

            <div className="main__text" onClick={() => console.log(mainContents)}>
                <VerticalNav className="vertical__nav" setMainContents={setMainContents} />
                <MainContent className="main__content" mainContents={mainContents} />
               
            </div>
            
            
           
        </>
    );
}
export default Home;