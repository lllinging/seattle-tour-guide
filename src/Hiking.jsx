import { useState } from 'react';

import Accordion from './Accordion';
import Panel from './Panel';

import mountRainier from './images/peter-robbins-HAhGtynvK0A-unsplash.jpg';
import olympicNationalPark from './images/joshua-woroniecki-urIHJKspF6E-unsplash.jpg';
import snoqualmieFalls from './images/michael-sanchez-kRhHn0b-kRM-unsplash.jpg';
import northCascadesNationalPark from './images/alex-moliski-QHhoOhM9qdA-unsplash.jpg';
import mountSi from './images/peter-robbins-DMhc_mUteNM-unsplash.jpg';
import tigerMountain from './images/dave-hoefler-T0TAxRAY8uY-unsplash.jpg';
import discoveryPark from './images/bhavya-budania-RBt-v6-qB1M-unsplash.jpg';


// import './css/MainContent.css';

function Hiking() {

    const panels = [
        {
            name: "Mount Rainier",
            picture: mountRainier,
            alt: "a-snow-covered-mountain-with-trees-in-the-foreground",
            text: "Mount Rainier is the highest mountain of the Cascade Range of the Pacific Northwest, and the highest mountain in the U.S. state of Washington. It is a large active stratovolcano located 59 miles south-southeast of Seattle, in the Mount Rainier National Park.",
            recommendationScore: 5
        },
        {
            name: "Olympic National Park",
            picture: olympicNationalPark,
            alt: "a-road-in-the-middle-of-a-forest-with-tall-trees",
            text: "Olympic National Park is a United States national park located in the State of Washington, on the Olympic Peninsula. The park has four basic regions: the Pacific coastline, alpine areas, the west side temperate rainforest and the forests of the drier east side.",
            recommendationScore: 5
        },
        {
            name: "Snoqualmie Falls",
            picture: snoqualmieFalls,
            alt: "a-waterfall-surrounded-by-trees-and-rocks",
            text: "Snoqualmie Falls is a 268-foot waterfall in the northwest United States, located east of Seattle on the Snoqualmie River between Snoqualmie and Fall City, Washington.",
            recommendationScore: 4
        },
        {
            name: "North Cascades National Park",
            picture: northCascadesNationalPark,
            alt: "a-body-of-water-surrounded-by-trees-and-rocks",
            text: "North Cascades National Park is a U.S. National Park located in the state of Washington. The park features rugged mountain peaks and protects portions of the North Cascades range.",
            recommendationScore: 5
        },
        {
            name: "Mount Si",
            picture: mountSi,
            alt: "a-lake-with-a-mountain-in-the-background",
            text: "Mount Si is a mountain in the U.S. state of Washington. It lies on the western margin of the Cascade Range just above the coastal plains around Puget Sound, and towers over the nearby town of North Bend.",
            recommendationScore: 4
        },
        {
            name: "Tiger Mountain",
            picture: tigerMountain,
            alt: "a-trail-in-the-middle-of-a-forest-with-lots-of-trees",
            text: "Tiger Mountain is a mountain in the U.S. state of Washington. The mountain is located in the western foothills of the Cascade Mountains, east of Seattle.",
            recommendationScore: 3
        },
        {
            name: "Discovery Park",
            picture: discoveryPark,
            alt: "a-person-standing-on-a-beach-next-to-the-ocean",
            text: "Discovery Park is a 534 acre natural area park operated by the Seattle Parks and Recreation. It is the largest city park in Seattle, and occupies most of the former Fort Lawton site.",
            recommendationScore: 4
        }
    ];

    const list = panels.map((panel, index) => {
        return (
            <Accordion
                key={index}
                id={`hiking-${index}`}
                title={panel.name}
                panel={
                    <Panel
                        picture={panel.picture}
                        alt={panel.alt}
                        text={panel.text}
                        reconmmendationScore={panel.recommendationScore}
                    />
                }
            />
        );
    });
    return (
        
        <>
           
            {list}
    

        </>

    );
}

export default Hiking;