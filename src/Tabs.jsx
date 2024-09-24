import { useState } from 'react';

import './css/Tabs.css';
import PlanItem from './PlanItem';

//create a Accordion Tabs component
function Tabs({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const [state, setState] = useState(1);

    const action = (index) => {
        setState(index);
    }

    console.log('tab label', tabs[0].label);
    console.log('tab content', tabs[0].content);

    return (
        <>
        <div className="box">
             <div className="tabs">
                 {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`tabs__button ${index === activeIndex ? 'tab active-tab' : 'tab'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="contents">
                <div className="content active-content">
                    {/* {tabs[activeIndex].content} */}
                    <PlanItem plans={tabs[activeIndex].content} />
                </div>
               
            </div>
        </div>


        </>
        
    );
}

export default Tabs;