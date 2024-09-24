import Gallery from './Gallery'
import Tabs from './Tabs';

import pikePlaceMarket from './images/randy-rizo-1BWcuQz19sc-unsplash.jpg';
import spaceNeedle from './images/nitish-meena--48aJfQpFCE-unsplash.jpg';
import lakeUnion from './images/zoshua-colah-VyK3jCKoUh0-unsplash.jpg';
import lakeSammamish from './images/zac-gudakov-ZAOcGoHrZF0-unsplash.jpg';

import mountSi from './images/kevin-fabila-kCfuTzurrMM-unsplash.jpg';
import SnoqualmieFalls from './images/michael-sanchez-kRhHn0b-kRM-unsplash.jpg';
import mountRainierNP from './images/will-myers-Q8zItYN5HPs-unsplash.jpg';
import discoveryPark from './images/bhavya-budania-RBt-v6-qB1M-unsplash.jpg';

import greenLakePark from './images/yan-liu-5TzFYNadm-I-unsplash.jpg';
import museumOfFlight from './images/mario-mendez-Q_G7_q4UQ0s-unsplash.jpg';
import museumOfPopCulture from './images/ryan-parker-HgTaaP2TnaA-unsplash.jpg';
import goldenGardensPark from './images/vincent-yuan-usa-JHhcNu7aIL0-unsplash.jpg';
import alkiBeach from './images/kush-dwivedi-me2bEA0-p9A-unsplash.jpg';


function SevenDaysPlan() {    

    const images = [
        {
            name: "Pike Place Market",
            url: pikePlaceMarket,
            alt: "man-in-gray-jacket-walking-on-sidewalk-during-night-time",
        },
        {
            name: "Space Needle",
            url: spaceNeedle,
            alt: "a-view-of-a-city-at-night-from-the-top-of-a-building",
        },
        {
            name: "Lake Union",
            url: lakeUnion,
            alt: "a-sailboat-in-a-body-of-water-with-a-city-in-the-background",
        },
        {
            name: "Lake Sammamish",
            url: lakeSammamish,
            alt: "green-trees-near-lake-under-white-clouds-and-blue-sky-during-daytime",
        },


        {
            name: "Mount Si",
            url: mountSi,
            alt: "green-pine-trees-under-blue-sky-during-daytime",
        },
        {
            name: "Snoqualmie Falls",
            url: SnoqualmieFalls,
            alt: "aerial-view-of-waterfall-during-daytime",
        },
        {
            name: "Mount Rainier NP",
            url: mountRainierNP,
            alt: "trees-near-mountain-during-daytime",
        },
        {
            name: "Discovery Park",
            url: discoveryPark,
            alt: "a-person-standing-on-a-beach-next-to-the-ocean",
        },

        
        {
            name: "Green Lake Park",
            url: greenLakePark,
            alt: "a-close-up-of-a-leafy-tree-next-to-a-body-of-water",
        },
        {
            name: "Museum of Flight",
            url: museumOfFlight,
            alt: "black-and-silver-remote-controls-on-table",
        },
        {
            name: "Museum of Pop Culture",
            url: museumOfPopCulture,
            alt: "architectural-photography-of-statue",
        },
        {
            name: "Golden Gardens Park",
            url: goldenGardensPark,
            alt: "a-large-body-of-water-with-a-sunset-in-the-background",
        },
        {
            name: "Alki Beach",
            url: alkiBeach,
            alt: "a-person-riding-a-surf-board-on-a-body-of-water",
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
            departureTime: "12:00 am",
            Duration: "1 hour",
            ticketPrice: "$30",
            features: "360-degree panoramic view, iconic landmark"
        },

        {
            day: "Day 1: Downtown Exploration",
            title: "Seattle Waterfront",
            departureTime: "3:00 pm",
            Duration: "1 hour",
            ticketPrice: "-",
            features: "Scenic stroll, seafood restaurants"
        },

    ]

    const DayTwoPlan = [
        
            {
                day: "Day 2: Boating on Lake Union",
                place: "Lake Union",
                departureTime: "10:00 am",
                Duration: "3 hour",
                ticketPrice: "$50",
                features: "Rent a kayak or paddleboard, see houseboats"
            },
            
                {
                    day: "Day 2: Boating on Lake Union",
                    place: "Lake Sammamish",
                    departureTime: "2:00 pm",
                    Duration: "1 hour",
                    ticketPrice: "-",
                    features: "Picnic spot, view of Seattle skyline"
                },
        ]

    const DayThreePlan = [
        {
            day: "Day 3: Hiking in the Mountains",
            place: "Mount Si",
            departureTime: "9:00 am",
            Duration: "4 hour",
            ticketPrice: "-",
            features: "Stunning views of the Cascade Mountains"
        },

        {
            day: "Day 3: Hiking in the Mountains",
            place: "Snoqualmie Falls",
            departureTime: "2:00 pm",
            Duration: "2 hour",
            ticketPrice: "-",
            features: "Waterfall, hiking trails"
        }
    ]

    const DayFourPlan = [
        {
            day: "Day 4: Camping at Mt Rainier National Park",
            place: "Mount Rainier NP",
            departureTime: "9:00 am",
            Duration: "-",
            ticketPrice: "$30",
            features: "Camping, hiking, wildlife spotting"
        },
    ]

    const DayFivePlan = [
        {
            day: "Day 5: Exploring the Park",
            place: "discovery park",
            departureTime: "10:00 am",
            Duration: "4 hour",
            ticketPrice: "-",
            features: "Wildflower meadows, hiking trails"
        },

        {
            day: "Day 5: Exploring the Park",
            place: "Green Lake Park",
            departureTime: "3:00 pm",
            Duration: "2 hour",
            ticketPrice: "-",
            features: "Spectacular views, visitor exhibits"
        }


    ]

    const DaySixPlan = [
        {
            day: "Day 6: Return to Seattle",
            place: "Museum of Flight",
            departureTime: "10:00 am",
            Duration: "3 hour",
            ticketPrice: "$25",
            features: "Aviation history, interactive exhibits"
        },

        {
            day: "Day 6: Return to Seattle",
            place: "Museum of Pop Culture",
            departureTime: "2:00 pm",
            Duration: "1 hour",
            ticketPrice: "-",
            features: "Music, science fiction, pop culture"
        }
    ]

    const DaySevenPlan = [
        {
            day: "Day 7: Relaxing at the Beach",
            place: "Golden Gardens Park",
            departureTime: "10:00 am",
            Duration: "3 hour",
            ticketPrice: "-",
            features: "Sandy beach, hiking trails"
        },

        {
            day: "Day 7: Relaxing at the Beach and Departure",
            place: "Alki Beach",
            departureTime: "2:00 pm",
            Duration: "2 hour",
            ticketPrice: "-",
            features: "Sandy beach, scenic views"
        }
    ] 

    const SevenDaysPlan = [
        
        DayOnePlan, DayTwoPlan, DayThreePlan, DayFourPlan, DayFivePlan, DaySixPlan, DaySevenPlan
        
    ]
    
    const tabs = [{label: 'Day 1', content: DayOnePlan}, {label: 'Day 2', content: DayTwoPlan}, {label: 'Day 3', content: DayThreePlan}, {label: 'Day 4', content: DayFourPlan}, {label: 'Day 5', content: DayFivePlan}, {label: 'Day 6', content: DaySixPlan}, {label: 'Day 7', content: DaySevenPlan}];

    
    return (
        <div className="plans__container">
            <Gallery images={images} />
            <h2 className="plan__title">Seven Days Plan</h2>
            <Tabs tabs={tabs}/>
        </div>
    );
    
}

export default SevenDaysPlan;