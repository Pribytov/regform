import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import moment from 'moment';
import './input-date.css';

const InputWrapper = styled('input')`
    color: ${props => props.isValid ? 'green' : 'red'};
`

export const InputDate = () => {
    let refDate = React.createRef();
    const [isValid, setIsValid] = useState(false);

    const changeHandler = (e) => {
        const MIN_WORD_NUMBER = 2;

        let val = refDate.current.value;

        if (val.trim().split(/ +(?:\S)/).length >= MIN_WORD_NUMBER)
            setIsValid(true);
        else
            setIsValid(false);
    }

    return (
        <div className='input-date'>
            <label>Введите дату записи, нажав кнопку календаря:</label>
            <InputWrapper
                type='date'
                required
                onChange={changeHandler}
                ref={refDate}
                min={moment().format('YYYY-MM-DD')}
                max={moment().add(30, 'day').format('YYYY-MM-DD')}
                isValid={isValid}
            />
        </div>
    );
};