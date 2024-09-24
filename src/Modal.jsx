import { useState } from 'react';
import { useRef } from 'react';

import Button from './Button';
import LogIn from './LogIn';
import Content from './Content';

import './css/Modal.css';

function Modal() {
    const dialogRef = useRef();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    function onLogin(username) {
        setUsername(username);
        setIsLoggedIn(true);
    };
    function onLogout() {
        setIsLoggedIn(false);
    };

    return (
        <>
            {isLoggedIn
                ? <Content
                    username={username}
                    onLogout={onLogout}
                />
                : <>
                <Button 
                className={"modal__button--open"}
                onClick={ () => {
                dialogRef.current.showModal();
                }}
                type="button"
                visual="button"
                children="Log In"
                />
                
                <dialog className="modal" ref={dialogRef}>
                    <h2>Log In to Know More!</h2>
                    <LogIn onLogin={onLogin} dialogRef={dialogRef}/>
                    <div className="login__button" >
                </div>
                </dialog>
                </>
                }
        </>
    );
}

export default Modal;