import { useState } from 'react';

import Button from './Button';

import './css/Accordion.css';

function Accordion({ id, title, panel }) {
    const [isExpanded, setIsExpanded] = useState(true);
    const symbol = isExpanded ? "-" : "+";          

    return (
        
        
          <>
            
            <button
              className="accordion__title"       
              id={`${id}-header`}
              aria-controls={`${id}-panel`}
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded(!isExpanded)}
            > 
              {title}
              <span className="accordion__symbol" aria-hidden="true">{symbol}</span>
            </button>
            
            <section
              className="accordion__panel"
              id={`${id}-panel`}
              aria-labelledby={`${id}-header`}
              hidden={!isExpanded}
            >
                {panel}
            </section>
          </>
        )
    
}

export default Accordion;