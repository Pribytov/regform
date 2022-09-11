import React from 'react';
import { useState } from 'react';
import './input-email.css';
import '../regform/regform.css';

export const InputEmail = ({updateData}) => {
    let refEmail = React.useRef();
    const [isValid, setIsValid] = useState(false);

    const changeHandler = () => {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        
        let val = refEmail.current.value;

        if (EMAIL_REGEXP.test(val)){
            updateData(val);
            setIsValid(true);
        } else {
            updateData(null);
            setIsValid(false);
        }
    }

    return (
        <div className='input-Email'>
            <input
                className={isValid ? `valid-input` : `invalid-input`}
                type='email'
                placeholder='Введите email'
                required
                onChange={changeHandler}
                ref={refEmail}
                isValid={isValid}
            />
        </div>
    );
};