import { useState } from 'react';

import Accordion from './Accordion';   
import Panel from './Panel'; 

// import './css/Attraction.css';

import spaceNeedle from './images/nitish-meena--48aJfQpFCE-unsplash.jpg';
import publicMarket from './images/allison-raber-_ZlLJYLI-Bk-unsplash.jpg';
import chihulyGardenAndGlass from './images/finn-8SybeS9_Kb4-unsplash.jpg';
import seattleArtMuseum from './images/brett-wharton-3zyo0eJF1-A-unsplash.jpg';
import amazonSpheres from './images/alexandra-tran-vWxVC8tehI0-unsplash.jpg';


function Attraction() {
    const panels = [
        {
            name: "Space Needle",
            picture: spaceNeedle,
            alt: "space-needle-seattle-surrounded-by-fireworks",
            text: "The Space Needle is an iconic landmark in Seattle. It was built for the 1962 World's Fair and offers stunning views of the city and surrounding area.",
            reconmmendationScore: 5
        },
        {
            name: "Pike Place Market",
            picture: publicMarket,
            alt: "photo-of-red-and-black-public-market-signage",
            text: "Pike Place Market is one of the oldest continuously operated public farmers' markets in the United States. It is a popular tourist destination and is known for its fresh seafood, produce, and crafts.",
            reconmmendationScore: 4
        },
        {
            name: "Chihuly Garden and Glass",
            picture: chihulyGardenAndGlass,
            alt: "a-glass-ceiling-with-a-bunch-of-flowers-hanging-from-it",
            text: "Chihuly Garden and Glass is an exhibition of glass art by Dale Chihuly. It is located near the Space Needle and features indoor and outdoor installations of Chihuly's work.",
            reconmmendationScore: 4
        },
        {
            name: "Seattle Art Museum",
            picture: seattleArtMuseum,
            alt: "a-large-wooden-sculpture-hanging-from-the-ceiling-of-a-building",
            text: "The Seattle Art Museum is a world-class museum with a collection of over 25,000 works of art. It is located in downtown Seattle and features art from around the world.",
            reconmmendationScore: 3
        },
        {
            name: "Amazon Spheres",
            picture: amazonSpheres,
            alt: "a-very-tall-building-next-to-a-very-tall-building",
            text: "The Amazon Spheres are a group of three glass domes located at the Amazon headquarters in Seattle. They are filled with plants and are open to the public for tours.",
            reconmmendationScore: 3
        }   
    ];

    const list = panels.map((panel, index) => {
        return (
            <Accordion
                key={index}
                id={`attraction-${index}`}
                title={panel.name}
                panel={
                    <Panel
                        picture={panel.picture}
                        alt={panel.alt}
                        text={panel.text}
                        reconmmendationScore={panel.reconmmendationScore}
                    />
                }
            />
        );
    }); 


    return (
        <div className="attraction">
            {list}    
        </div>
    );
}

export default Attraction;


         