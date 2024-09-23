import { useRef, useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Context from '../../store/context/Context';
import classes from './ProceedPage.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length !== 6; 

const ProceedPage = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        pinCode: true,
        city: true
    });

    const cartCtx = useContext(Context);

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const pinCodeInputRef = useRef();
    const cityInputRef = useRef();
    const navigate = useNavigate();

const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPinCode = pinCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPinCodeIsValid = !isFiveChars(enteredPinCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        pinCode: enteredPinCodeIsValid,
        city: enteredCityIsValid
    });

    const formIsValid = 
        enteredNameIsValid &&
        enteredStreetIsValid &&
        enteredPinCodeIsValid &&
        enteredCityIsValid;
    
    if (!formIsValid) {
        return;
    }
    
    cartCtx.clearCart();

    navigate('/success');
};

const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
    }`;
const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
    }`;
const pinCodeControlClasses = `${classes.control} ${
    formInputsValidity.pinCode ? '' : classes.invalid
    }`;
const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
    }`;

return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Enter Your Full Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='street'>Enter your Street address</label>
            <input type='text' id='street' ref={streetInputRef} />
            {!formInputsValidity.street && <p>Please enter a valid street address!</p>}
        </div>
        <div className={pinCodeControlClasses}>
            <label htmlFor='pin'>Enter your PinCode Code</label>
            <input type='text' id='pin' ref={pinCodeInputRef} />
            {!formInputsValidity.pinCode && <p>Please enter a valid pin code (5 digits long)!</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor='city'>Enter your District Name</label>
            <input type='text' id='city' ref={cityInputRef} />
            {!formInputsValidity.city && <p>Please enter a valid district name!</p>}
        </div>
        <div className={classes.actions}>
            <NavLink to= "/cart"> <button type='button' onClick={props.onCancel}>
                Cancel
            </button> </NavLink>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
    );
};

export default ProceedPage;