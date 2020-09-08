import React, { useState } from 'react';
import './Form.styles.scss';

const Form = ({ setIsFormActive }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [rangeValue, setRangeValue] = useState('0');
    const [isUsernameInvalidMsgShown, setIsUsernameInvalidMsgShown] = useState(false);
    const [isEmailInvalidMsgShown, setIsEmailInvalidMsgShown] = useState(false);

    const handleUsernameChange = ({ target }) => {
        setUsername(target.value);
        setIsUsernameInvalidMsgShown(false);
    };

    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
        setIsEmailInvalidMsgShown(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isUsernameValid = username.length > 0;
        const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );

        if (!isUsernameValid) {
            setIsUsernameInvalidMsgShown(true);
        } else if (!isEmailValid) {
            setIsEmailInvalidMsgShown(true);
        }

        if (isUsernameValid && isEmailValid) {
            setIsFormActive(false);
        }

    };

    return (
        <div className="form-wrap">

            <div className="form-title">Apply the form</div>

            <form 
                action=""
                className="form form--error"
                noValidate
                onSubmit={handleSubmit}
            >
                <label 
                    htmlFor=""
                    className="form__input-container"
                >
                    {isUsernameInvalidMsgShown && (
                        <span className="form__error form__error--empty">
                            Please enter user name
                        </span>
                    )}
                    <input 
                        type="text" 
                        className={`form__input form__input--${username.length > 0 ? 'filled' : 'empty'}`}
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                    <span className="form__label">
                        Name:
                    </span>
                </label>
                <label 
                    htmlFor=""
                    className="form__input-container"
                >
                    {isEmailInvalidMsgShown && (
                        <span className="form__error form__error--empty">
                            Please enter valid email
                        </span>
                    )}
                    <input 
                        type="email" 
                        className={`form__input form__input--${email.length > 0 ? 'filled' : 'empty'}`}
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <span className="form__label">
                        Email:
                    </span>
                </label>
                <label 
                    htmlFor=""
                    className="form__input-container"
                >
                    <span className="form__input-label">
                        Date of birth:
                    </span>
                    <input 
                        type="date" 
                        className='form__input form__input--date'
                    />
                </label>
                <label 
                    htmlFor=""
                    className="form__input-container"
                >
                    <span className="form__input-label">
                        
                        Favourite colour:
                    </span>
                    <input 
                        type="color"
                        className='form__input form__input--color'
                        />
                </label>
                <label 
                    htmlFor=""
                    className="form__input-container"
                >
                    <span className="form__input-label">
                        Salary (${rangeValue || 0}):
                    </span>
                    <input 
                        type="range"
                        min='0'
                        max='100000'
                        step='100'
                        className='form__input form__input--range'
                        value={rangeValue}
                        onChange={(e) => {setRangeValue(e.target.value)}}
                    />
                </label>
                <button 
                    className="form__btn"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;