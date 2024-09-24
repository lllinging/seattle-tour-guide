import { useState } from 'react';

import Accordion from './Accordion';

import Panel from './Panel';

import fastFood from './images/eiliv-aceron-5nvt9BrLaAc-unsplash.jpg';
import coffee from './images/nathan-dumlao-Y3AqmbmtLQI-unsplash.jpg';
import seafood from './images/daniel-norris-PdK_Cu876aE-unsplash.jpg';
import steakHouse from './images/fabio-alves-IkcWRgegT3s-unsplash.jpg';
import chineseFood from './images/keji-gao-s22ALHSKeys-unsplash.jpg';


// import './css/Food.css';

function Food() {
    const [isExpanded, setIsExpanded] = useState(false);

    const panel = [
        {
            name: "Fast Food",
            picture: fastFood,
            alt: "burger-on-white-and-red-paper",
            text: "Fast food is a popular dining option in Seattle. You can find many fast food chains throughout the city, offering burgers, fries, and other quick and convenient meals.",
            reconmmendationScore: 3
        },
        {
            name: "Coffee",
            picture: coffee,
            alt: "flat-lay-photography-of-coffee-latte-ground-coffee-and-coffee-beans",
            text: "Seattle is known for its coffee culture. There are many coffee shops in the city, including the original Starbucks store at Pike Place Market. You can also find local roasters and cafes throughout the city.",
            reconmmendationScore: 5
        },
        {
            name: "Seafood",
            picture: seafood,
            alt: "lobster-in-plate",
            text: "Seattle is known for its seafood, including fresh salmon, oysters, and Dungeness crab. You can find many seafood restaurants in the city that serve local and sustainable seafood dishes.",
            reconmmendationScore: 5
        },
        {
            name: "Steak House",
            picture: steakHouse,
            alt: "brown-and-black-grilled-meat",
            text: "Seattle has many steakhouses that serve high-quality cuts of beef, including ribeye, filet mignon, and New York strip. You can find steakhouses throughout the city that offer a variety of steak dishes.",
            reconmmendationScore: 4
        },
        {
            name: "Chinese Food",
            picture: chineseFood,
            alt: "dim-sum-on-white-plate",
            text: "Seattle has a vibrant Chinese food scene, with many restaurants serving authentic and fusion Chinese cuisine. You can find Chinese restaurants throughout the city that offer a wide variety of dishes.",
            reconmmendationScore: 4
        }   
    ];

    const list = panel.map((panel, index) => {
        return (
            <Accordion
                key={index}
                id={`food-${index}`}
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
        <div className="food">
            {list}
        
        </div>
    )
}

export default Food;