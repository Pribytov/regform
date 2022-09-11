import React from 'react';
import { useState } from 'react';
import '../regform/regform.css';

export const InputFullName = ({updateData}) => {
    const refFullname = React.useRef();
    const [isValid, setIsValid] = useState(false);

    const changeHandler = () => {
        const MIN_WORD_NUMBER = 2;

        let val = refFullname.current.value.trim();

        if (val.split(/ +(?:\S)/).length >= MIN_WORD_NUMBER){
            updateData(val);
            setIsValid(true);
        } else {
            updateData(null);
            setIsValid(false);
        }
    }

    return (
        <div className='input-fullname'>
            <input
                className={isValid ? `valid-input` : `invalid-input`}
                type='text'
                placeholder='Введите ФИО'
                required
                onChange={changeHandler}
                ref={refFullname}
                isValid={isValid}
            />
        </div>
    );
};