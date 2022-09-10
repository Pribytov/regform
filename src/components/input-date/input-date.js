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

    const changeHandler = () => {
        let val = refDate.current.value;
        updateData(val);
    }

    return (
        <div className='input-date'>
            <label>Введите дату записи, нажав кнопку календаря:</label>
            <InputWrapper
                type='date'
                required
                onChange={changeHandler}
                ref={refDate}
                readonly='true'
                min={moment().format('YYYY-MM-DD')}
                max={moment().add(30, 'day').format('YYYY-MM-DD')}
            />
        </div>
    );
};