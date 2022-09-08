import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import './input-fullname.css';

const InputWrapper = styled('input')`
    color: ${props => props.isValid ? 'green' : 'red'};
`

export const InputFullName = () => {
    let refFullname = React.createRef();
    const [isValid, setIsValid] = useState(false);

    const changeHandler = (e) => {
        const MIN_WORD_NUMBER = 2;

        let val = refFullname.current.value;

        if (val.trim().split(/ +(?:\S)/).length >= MIN_WORD_NUMBER)
            setIsValid(true);
        else
            setIsValid(false);
        console.log(isValid);
    }

    return (
        <div className='input-fullname'>
            <InputWrapper
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