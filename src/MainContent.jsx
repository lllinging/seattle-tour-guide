import { useState } from 'react';

import Attraction from './Attraction';
import Hiking from './Hiking';
import Boating from './Boating';
import Food from './Food';

import './css/MainContent.css';

function MainContent({ mainContents }) {

    return (
        <div id="mainContent" className="main__contents" onClick={() => console.log ("maincontent: "+mainContents)}>
           
            {(mainContents === 'Attractions') && <Attraction/>}
          
            {(mainContents === 'Hiking') && <Hiking/>}
            {(mainContents === 'Boating') && <Boating/>}

            {(mainContents === 'Food') && <Food/>}
        </div>
    );
}

export default MainContent;