import { useState, useEffect } from 'react';
import { useId } from 'react';
import Button from './Button';
import './css/LogIn.css';



function Login({ onLogin, dialogRef}) {

    const id = useId();
    const [user, setUser] = useState({username: "", password: "", phone: ""});
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [showSelectContent, setShowSelectContent] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        console.log("name" + user);
    };

    const usernameBlurHandle = (e) => {
        setUsernameFocused(true);
        setFormErrors(validate(user));
    };
    const passwordBlurHandle = (e) => {
        setPasswordFocused(true);
        setFormErrors(validate(user));
        
    };
    const phonenumberBlurHandle = (e) => {
        setPhoneFocused(true);
        {showSelectContent&&setFormErrors(validate(user))};
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
        setFormErrors(validate(user));
        setIsSubmit(true);
    };


    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(user);
        }
    }, [formErrors]);


    const validate = (values) => {

        const errors = {};
        if (!values.username || (!values.username && usernameFocused)) {
            errors.username = "Username is required";
        }
        if (!values.password || (!values.password && passwordFocused)) {
            errors.password = "Password is required";
        }

        if (showSelectContent && !values.phone ){   
            errors.phone = "Phone number is required";
        }
        if (showSelectContent && !values.phone && phoneFocused) {
            errors.phone = "Phone number is required";
        }
    

        return errors;

    };

    const selectHandler = (e) => {
        console.log("ccccc" + e.target.value);
        {e.target.value === "1" ? setShowSelectContent(true) : setShowSelectContent(false)}
        console.log("showSelectContent" + showSelectContent);
    };

    return (
        <form onSubmit={handleSubmit}  className="login" method="post">
            <label className="login__username">
                <span
                    htmlFor="login__username" >Username*:
                </span>
                <input
                    name="username"
                    id="login__username"
                    className="login__input"
                    placeholder="Enter username"
                    onBlur={usernameBlurHandle}
                    value={user.username}
                    onInput={handleChange}
                />
            </label>
            <p className="login__error">{formErrors.username}</p>
            <label className="login__pasword">
                <span
                    htmlFor="login__password" >Password*:
                </span>
                <input
                    name="password"
                    id="login__password"
                    className="login__input"
                    placeholder="Enter password"
                    onBlur={passwordBlurHandle}
                    value={user.password}
                    onInput={handleChange}
                />
            </label>
            <p className="login__error">{formErrors.password}</p>

           
            <label className="login__label user__phone">
                    <span htmlFor="phone__number">Contact?*:</span>
                    <select name="phone__number" className="phone__number"
                    onClick={selectHandler}
                    >
                        <option disabled selected value="">Do you want us to contact you?</option>
                        <option value="1">YES</option>
                        <option value="2">NO</option>
                    </select>
                </label>
                {showSelectContent && 
                <label className="login__phone">
                    <span
                        htmlFor="login__phone" >Phone Number:
                    </span>
                    <input
                        name="phone"
                        id="login__phone"
                        className="login__input"
                        placeholder="Enter phone number"
                        value={user.phone}
                        onBlur={phonenumberBlurHandle}
                        onInput={handleChange}
                    />
                </label>}
                {showSelectContent&&<p className="login__error">{formErrors.phone}</p>}
            
            <div className="login__button"> 
                <Button
                    className="login__submit"
                    type="submit"
                    visual="button"
                    children="Submit"
                    onClick={() => {
                        console.log("formErrors" + formErrors);
                        console.log("Object.keys(formErrors).length" + Object.keys(formErrors).length);
                        if (Object.keys(formErrors).length === 0) {
                            onLogin(user.username);
                        }
                    }}
                />             
                <Button
                    className="login__cancel"
                    children="Cancel"
                    type="button"
                    visual="button"
                    onClick={() => {
                        dialogRef.current.close();
                    }}
                />
            </div>


        </form>
    );

}
export default Login;