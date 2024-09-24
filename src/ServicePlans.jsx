import { useState } from 'react';

import Card from './Card';

import './css/ServicePlans.css';

import downTown from './images/zoshua-colah-Qd3H-66GXSc-unsplash.jpg';
import lake from './images/gantavya-bhatt-hKKfmucOMYs-unsplash.jpg';
import mountain from './images/markus-gjengaar-i371H-yD5CE-unsplash.jpg';

function ServicePlans({ setPage, setServicePage}) {


    const cards =[
        {
            title: "Classic day trip",
            pic: downTown,
            alt: "a-view-of-a-city-at-night-from-the-top-of-a-building",
            price: "$100",
            date: "Everyday",
            language: "English, mandarian",
            days: "1 day",
            features: "Visit Seattle (Chihuly Glass Garden, Museum of Flight, Pike Place Market, Space Needle).",
            linkText: "Home",
            children: "One Day Tour Plan",
        },
        {
            title: "Three days tour",
            pic: lake,
            alt: "a-lake-with-mountains-in-the-background",
            price: "$300",
            date: "Everyday",
            language: "English, mandarian",
            days: "3 day",
            features: "Day 1: Space Needle, Glass Museum, Pike Place Market; Day 2: Museum of Flight, Museum of Pop Culture; Day 3: Boating, camping.",
            children: "Three Days Tour Plan",
        },
        {
            title: "Seven days tour",
            pic: mountain,
            alt: "a-mountain-with-trees-in-the-foreground",
            price: "$700",
            date: "Everyday",
            language: "English, mandarian",
            days: "7 day",
            features: "day1-day2: downtown, day3-day4: hiking, day5-day6: boating, day7: camping.",
            children: "Seven Days Tour Plan",
        }
      
    ]



    const list = cards.map((card, index) => {
        return (
            <Card
                key={index}
                className="card"
                title={card.title}
                pic={card.pic}
                alt={card.alt}
                price={card.price}
                date={card.date}
                language={card.language}
                days={card.days}
                features={card.features}
                children={card.children}
                onReadMore={card.onReadMore}
                setServicePage={setServicePage}

               
            />
        );
    });

    return (
        
        <div className="cards">
            {list}
            
        </div>
    );
}
export default ServicePlans;