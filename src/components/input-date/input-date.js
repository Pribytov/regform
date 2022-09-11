import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import '../regform/regform.css';

export const InputDate = ({updateData}) => {
    let refDate = React.useRef();
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
            <input
                className={isValid ? `valid-input` : `invalid-input`}
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