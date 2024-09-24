import Gallery from "./Gallery";
import Tabs from "./Tabs";

import spaceNeedle from './images/nitish-meena--48aJfQpFCE-unsplash.jpg';
import chihulyGarden from './images/finn-8SybeS9_Kb4-unsplash.jpg';
import museumOfFlight from './images/ian-taylor-4cGilXXLeao-unsplash.jpg';
import pikePlaceMarket from './images/ryan-stone-VnZMKbXrA0I-unsplash.jpg';
import lakeUnion from './images/zoshua-colah-VyK3jCKoUh0-unsplash.jpg';
import pudgetsound from './images/jessie-chou-kNiro_gaL7I-unsplash.jpg';
import lakeSammamish from './images/zac-gudakov-ZAOcGoHrZF0-unsplash.jpg';
import mountBaker from './images/pavl-polo-iCWWV48bR_Y-unsplash.jpg';
import DiabloLake from './images/brewing-cats-oNg5pNbi3mo-unsplash.jpg';
import olympicNationalPark from './images/will-walker-WuX2rdbgVwk-unsplash.jpg';


function ThreeDaysPlan() {   

    const images = [
        {
            name: "SpaceNeedle",
            url: spaceNeedle,
            alt: "space-needle-tower-at-night",
        },
        {
            name: "ChihulyGarden",
            url: chihulyGarden,
            alt: "a-close-up-view-of-a-colorful-glass-sculpture",
        },
        {
            name: "MuseumofFlight",
            url: museumOfFlight,
            alt: "a-blue-and-yellow-fighter-jet-flying-over-a-museum-of-flight-sign",
        },
        {
            name: "PikePlaceMarket",
            url: pikePlaceMarket,
            alt: "pike-market-logo-on-a-signboard",
        },
        {
            name: "LakeUnion",
            url: lakeUnion,
            alt: "a-lake-with-a-boat",
        },
        {
            name: "PudgetSound",
            url: pudgetsound,
            alt: "a-lake-with-a-boat",
        },
        {
            name: "LakeSammamish",
            url: lakeSammamish,
            alt: "a-lake-with-a-boat",
        },
        {
            name: "MountBaker",
            url: mountBaker,
            alt: "a-lake-with-a-boat",
        },
        {
            name: "DiabloLake",
            url: DiabloLake,
            alt: "a-lake-with-a-boat",
        },
        {
            name: "OlympicNationalPark",
            url: olympicNationalPark,
            alt: "a-lake-with-a-boat",
        }

        

    ];

    const DayOnePlan = [
        {
            day: "Day 1: Downtown Exploration",
            place: "Pike Place Market",
            departureTime: "9:00 am",
            Duration: "2 hour",
            ticketPrice: "-",
            features: "Fresh seafood, handmade crafts, local cuisine"
        },

        {
            day: "Day 1: Downtown Exploration",
            place: "Space Needle",
            departureTime: "11:00 am",
            Duration: "1 hour",
            ticketPrice: "$30",
            features: "360-degree panoramic view, iconic landmark"
        },

        {
            day: "Day 1: Downtown Exploration",
            title: "Chihuly Garden and Glass",
            departureTime: "1:00 pm",
            Duration: "1 hour",
            ticketPrice: "0-$40",
            features: "glass art, garden"
        },

        {
            day: "Day 1: Downtown Exploration",
            place: "Seattle Art Museum",
            departureTime: "3:30 pm",
            Duration: "2 hour",
            ticketPrice: "$25",
            features: "Exquisite art collections, modern & traditional"
        }
    ]

    const DayTwoPlan = [

        {
            day:"Day 2: Boating Adventure",
            place: "Lake Union",
            departureTime: "10:00 am",
            Duration: "3 hour",
            ticketPrice: "$50",
            features: "Rent a kayak or paddleboard, see houseboats"
        },

        {
            day:"Day 2: Boating Adventure",
            place: "pudget sound",
            departureTime: "1:00 pm",
            Duration: "1 hour",
            ticketPrice: "-",
            features: "Picnic, fly a kite, watch seaplanes"
        },

        {
            day:"Day 2: Boating Adventure",
            place: "Lake Sammamish",
            departureTime: "3:00 pm",
            Duration: "1 hour",
            ticketPrice: "-",
            features: "Quirky shops, outdoor art, craft breweries"
        }

    ]

    const DayThreePlan = [

        {
            day:"Day 3: Camping",
            place: "mount baker",
            departureTime: "9:00 am",
            Duration: "3 hours",
            ticketPrice: "-",
            features: "Birdwatching, hiking, beach, lighthouse"
        },

        {
            day:"Day 3: Nature Exploration",
            place: "Diablo lake",
            departureTime: "1:00 pm",
            Duration: "2 hour",
            ticketPrice: "0-$30",
            features: "Wildlife conservation, animal exhibits"
        },

        {
            day:"Day 3: Nature Exploration",
            place: "olympic national park",
            departureTime: "3:30 pm",
            Duration: "1 hour",
            ticketPrice: "-",
            features: "Watch boats, fish ladder, botanical garden"
        }
    ]

    const ThreeDaysPlan = [
        DayOnePlan, DayTwoPlan, DayThreePlan
    ]
    
    const tabs = [{label: 'Day 1', content: ThreeDaysPlan[0]}, {label: 'Day 2', content: ThreeDaysPlan[1]}, {label: 'Day 3', content: ThreeDaysPlan[2]}];



   

    return (
        <div className="plans__container">
            <Gallery images={images} />
            <h2 className="plan__title">Three Days Plan</h2>
            <Tabs tabs={tabs}/>
        </div>
    );


}

export default ThreeDaysPlan;