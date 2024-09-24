// src/Header.jsx
import { useState } from 'react';

import GlobalNav from './GlobalNav';
import Modal from './Modal';
import Login from './LogIn';
import Content from './Content';
import './css/Header.css';

import logo from "./images/logo.png";

/*setpage,home,about--SPA*/
function Header({ setPage, setServicePage }) {
   

    return (
        <header className="header">
            
            <Modal />
            <img
                src={logo}
                className="header__logo"
                alt="Logo Of Seattle Tour Guide"
            />
            <h1 className="header__title">
                Welcome to Seattle Tour Guide
            </h1>
            <GlobalNav className="header__nav" setPage={setPage} setServicePage={setServicePage} />
        </header>
    );
}
export default Header;