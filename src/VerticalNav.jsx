import verticalMenu from './verticleMenu';

import './css/VerticalNav.css';

function VerticalNav({ setMainContents }) {

    const list = verticalMenu.map((item) => {
        return (
            <li key={item.name} className="vertical-nav__item">
                <a 
                className="vertical-nav__link" 
                onClick={ (e) => {
                    console.log("vnav"+ e.target.innerText);
                    setMainContents(e.target.innerText);

                }}
                >
                    {item.name}
                </a>
            </li>

        );
    });

    return (
        
            <ul className="vertical-nav__list" 
            >
                {list}
            </ul>
        
    );
}

export default VerticalNav;