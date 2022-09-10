import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import './input-age.css';

const InputWrapper = styled('input')`
    color: ${props => props.isValid ? 'green' : 'red'};
`

export const InputAge = ({updateData}) => {
    let refAge = React.createRef();
    const [isValid, setIsValid] = useState(false);

    const changeHandler = () => {
        const MIN_NUMBER = 0;
        const MAX_NUMBER = 150;

        let val = refAge.current.value;
        
        if (val >= MIN_NUMBER && val <= MAX_NUMBER){
            setIsValid(true);
            updateData(val);
        } else
            setIsValid(false);
    }

    return (
        <div className='input-Age'>
            <InputWrapper
                type='number'
                placeholder='Введите возраст'
                required
                onChange={changeHandler}
                ref={refAge}
                min='0'
                max='150'
                isValid={isValid}
            />
        </div>
    );
};