
import Gallery from './Gallery';
import Tabs from './Tabs';

import './css/OneDayPlan.css';

import spaceNeedle from './images/andrea-leopardi-QfhbK2pY0Ao-unsplash(1).jpg';
import chihulyGarden from './images/sunira-moses-sGsF5icjrUw-unsplash.jpg';
import museumOfFlight from './images/mario-mendez-Q_G7_q4UQ0s-unsplash.jpg';
import pikePlaceMarket from './images/benjamin-massello-E7cnqNDSToA-unsplash.jpg';


function OneDayPlan() {

    const images = [
        {
            name: "SpaceNeedle",
            url: spaceNeedle,
            alt: "space-needle-tower-at-night",
    
        }
        ,
        {
            name: "ChihulyGarden",
            url: chihulyGarden,
            alt: "a-close-up-view-of-a-colorful-glass-sculpture",
    
        }
        ,
        {
            name: "MuseumofFlight",
            url: museumOfFlight,
            alt: "a-blue-and-yellow-fighter-jet-flying-over-a-museum-of-flight-sign",
    
        }
        ,
        {
            name: "PikePlaceMarket",
            url: pikePlaceMarket,
            alt: "pike-market-logo-on-a-signboard",
    
        }
    ];

    const OneDayPlan = [
        {
            place: "Space Needle",
            departureTime: "9:00 am",
            Duration: "1 hour",
            ticketPrice: "$30",
            features: "360-degree panoramic view, iconic landmark"
        },
        {
            place: "Chihuly Garden and Glass",
            departureTime: "11:00 am",
            Duration: "1 hour",
            ticketPrice: "less than $40",
            features: "glass art, garden"
        },
        {
            place: "Seattle Art Museum",
            departureTime: "1:00 pm",
            Duration: "2 hour",
            ticketPrice: "$25",
            features: "Exquisite art collections, modern & traditional"
        },
        {
            place: "Pike Place Market",
            departureTime: "3:30 pm",
            Duration: "1 hour",
            ticketPrice: "-",
            features: "Fresh seafood, handmade crafts, local cuisine"
        }
        
    ]

    const tabs = [{label: 'Day 1', content: OneDayPlan}];


    return (
        <div className="plans__container">
            <Gallery images={images} />
            <h2 className="plan__title">One Day Plan</h2>
            <Tabs tabs={tabs}/>
        </div>
    );

}
export default OneDayPlan;  