import { useState } from 'react';

import Accordion from './Accordion';
import Panel from './Panel';

// import './css/Boating.css';

import boating from './images/marvin-maduro-rtWPr2FQT6Y-unsplash.jpg';
import kayaking from './images/filip-mroz-zK049OFP4uI-unsplash.jpg';
import sailing from './images/mick-kirchman-6D6KyXFGtxk-unsplash.jpg';
import surfing from './images/sincerely-media-oC32cy4x-ZA-unsplash.jpg';
import paddleboarding from './images/ben-white-pV5ckb2HEVk-unsplash.jpg';


function Boating() {
    const [isExpanded, setIsExpanded] = useState(false);

    const panel = [
        {
            name: "Boating",
            picture: boating,
            alt: "white-and-blue-boat-on-sea-during-daytime",
            text: "Boating is a popular activity in Seattle. There are many places to rent boats and kayaks in the city. You can also take a boat tour of the city's waterways.",
            reconmmendationScore: 5
        },
        {
            name: "Kayaking",
            picture: kayaking,
            alt: "woman-on-kayak-on-body-of-water-holding-paddle",
            text: "Kayaking is a great way to explore Seattle's waterways. You can rent kayaks at various locations around the city and paddle through Lake Union, Lake Washington, and the Puget Sound.",
            reconmmendationScore: 4
        },
        {
            name: "Sailing",
            picture: sailing,
            alt: "a-sailboat-in-the-middle-of-a-body-of-water",
            text: "Sailing is another popular boating activity in Seattle. You can take sailing lessons or rent a sailboat to explore the Puget Sound and surrounding areas.",
            reconmmendationScore: 4
        },
        {
            name: "Surfing",
            picture: surfing,
            alt: "a-person-surfing-on-a-body-of-water",
            text: "Surfing is a popular activity in the Pacific Northwest. While Seattle itself doesn't have great surfing beaches, there are several spots along the Washington coast that are popular with surfers.",
            reconmmendationScore: 3
        },
        {
            name: "Paddleboarding",
            picture: paddleboarding,
            alt: "boy-riding-on-surfboard-holding-black-boat-oats-during-daytime",
            text: "Paddleboarding is a fun and relaxing way to explore Seattle's waterways. You can rent paddleboards at various locations around the city and paddle through Lake Union, Lake Washington, and the Puget Sound.",
            reconmmendationScore: 3
        }   
    ];

    const list = panel.map((panel, index) => {
        return (
            <Accordion
                key={index}
                id={`boating-${index}`}
                title={panel.name}
                panel={
                    <Panel
                        picture={panel.picture}
                        text={panel.text}
                        alt={panel.alt}
                        reconmmendationScore={panel.reconmmendationScore}
                    />
                }
            />
        );
    });

    return (
        <>
            {/* <h2>Boating in Seattle</h2> */}
            {list}
              
            
        </>
        
    );
}   

export default Boating; 