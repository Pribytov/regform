import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import './input-email.css';

const InputWrapper = styled('input')`
    color: ${props => props.isValid ? 'green' : 'red'};
`

export const InputEmail = ({updateData}) => {
    let refEmail = React.createRef();
    const [isValid, setIsValid] = useState(false);

    const changeHandler = () => {
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        
        let val = refEmail.current.value;

        if (EMAIL_REGEXP.test(val)){
            setIsValid(true);
            updateData(val);
        } else
            setIsValid(false);
        console.log(isValid);
    }

    return (
        <div className='input-Email'>
            <InputWrapper
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