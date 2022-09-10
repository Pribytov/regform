import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import moment from 'moment';
import './input-date.css';

const InputWrapper = styled('input')`
    color: ${props => props.isValid ? 'green' : 'red'};
`

export const InputDate = ({updateData}) => {
    let refDate = React.createRef();
    const [isValid, setIsValid] = useState(false);
    let minDate = moment().format('YYYY-MM-DD');
    let maxDate = moment().add(30, 'day').format('YYYY-MM-DD');

    const changeHandler = () => {
        let val = refDate.current.value;

        if (moment(val).isBefore(minDate) ||
                moment(val).isAfter(maxDate)){
            updateData(null);
            setIsValid(false);
        } else {
            updateData(val);
            setIsValid(true);
        }
    }

    return (
        <div className='input-date'>
            <label>Введите дату записи, нажав кнопку календаря:</label>
            <InputWrapper
                type='date'
                required
                onChange={changeHandler}
                ref={refDate}
                min={minDate}
                max={maxDate}
                isValid={isValid}
            />
        </div>
    );
};