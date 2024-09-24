import { useState } from 'react';
/*react libray, no path./*/
import './css/GlobalNav.css';

import menu from './menu';
import Button from './Button';
import Modal from './Modal';


function GlobalNav({ className, setPage, setServicePage}) {

    const [showMenu, setShowMenu] = useState(false);
    const [showLogIn, setShowLogIn] = useState(false);  
    const [buttonText, setButtonText] = useState("");          
    /* iterate each item in the menu array and return a list item with an anchor tag */
    /*map()takes one array and make a new array */
    const list = menu.map(item => {
        return (
            /*each child in the list should have a unique key prop */
            <li key={item.name} className="global-nav__item">
                <a 
                className="global-nav__link" 
                href={item.path}
                onClick={ (e) => {
                    e.preventDefault();
                    console.log(e.target.innerText);
                    setPage(e.target.innerText);
                    setServicePage(e.target.innerText);
                }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    /*react conditionally render HTML, acoocrdion, menu-viewport--classname--conditionally change class name not html*/
    /*derived state based on state/state changes, this changes*/
    const showClass = showMenu ? '' : 'global-nav__list--collapsed';

    return (
        <nav className={`global-nav ${className}`}>

            {/* <button aria-label={showMenu ? "Close Menu" : "Open Menu"}>
                ...
            </button> */}
            {/* <button className="global-nav__toggle" onClick={() => setShowMenu(!showMenu)}>{showMenu ? "close Menu" : "open Menu"}</button> */}

            <button 
            className="global-nav__toggle" 
            onClick={() => 
            setShowMenu(!showMenu)}><i className="global-nav__button"></i></button>

            {/* /*hamburger state&media/react state manage toggle class, not existence
            react does not know the view port when media*/ }
            <ul className={`global-nav__list ${showClass}`}>
                {list}
            </ul>

        </nav>
    );
}
export default GlobalNav;
