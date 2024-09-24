import { useState } from 'react';

import Card from './Card';
import OneDayPlan from './OneDayPlan';
import ThreeDaysPlan from './ThreeDaysPlan';
import SevenDaysPlan from './SevenDaysPlan';

import './css/Service.css';

import downTown from './images/zoshua-colah-Qd3H-66GXSc-unsplash.jpg';
import lake from './images/gantavya-bhatt-hKKfmucOMYs-unsplash.jpg';
import mountain from './images/markus-gjengaar-i371H-yD5CE-unsplash.jpg';
import ServicePlans from './ServicePlans';


function Service({ page, setPage, servicePage, setServicePage}) {
    const [readMoreText, setReadMoreText] = useState('');

    // const [servicePage, setServicePage] = useState("Service");
    const [planNumber, setPlanNumber] = useState(0);

    function handleClick (e) {
        e.preventDefault();
        setServicePage(e.target.innerText);
        console.log("service choice" + e.target.innerText);
        
    }

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
            // onReadMore: {handleClick}
        },
        {
            title: "Three days tour",
            pic: lake,
            alt: "a-lake-with-mountains-in-the-background",
            price: "$300",
            date: "Everyday",
            language: "English, mandarian",
            days: "3 day",
            features: "Day 1: Space Needle, Glass Museum, Pike Place Market; Day 2: Museum of Flight, Museum of Pop Culture; Day 3: Boating, camping",
            linkText: "Home",
            children: "Three Days Tour Plan",
            // onReadMore: {handleClick}
        },
        {
            title: "Seven days tour",
            pic: mountain,
            alt: "a-mountain-with-trees-in-the-foreground",
            price: "$700",
            date: "Everyday",
            language: "English, mandarian",
            days: "7 day",
            features: "day1-day2: downtown, day3-day4: hiking, day5-day6: boating, day7: camping",
            linkText: "Home",
            children: "Seven Days Tour Plan",
            // onReadMore: {handleClick}
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
                linkText={card.linkText}
                children={card.children}
                onReadMore={card.onReadMore}
                setServicePage={setServicePage}

               
            />
        );
    });

    return (
        <div className="service__container">
            
            {/* <div className="cards">
                {list}
                
            </div> */}
            
            {(servicePage === "Service") && <ServicePlans setPage={setPage} setServicePage={setServicePage}/>}

            {(servicePage === "Classic day trip") && 
                <OneDayPlan/>}
            {(servicePage === "Three days tour") && 
                <ThreeDaysPlan/>}
            {(servicePage === "Seven days tour") && 
                <SevenDaysPlan/>}      

        </div>
    );

}

export default Service;