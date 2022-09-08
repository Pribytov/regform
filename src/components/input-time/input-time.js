import React from 'react';
import Select from 'react-select';
import './input-time.css';



export const InputTime = () => {
    <datelist id='timelist'>
        <option value='08:00-09.00'/>
        <option value='09:00-10.00'/>
    </datelist>

    const TimeSpansList = [
        {label: '08:00-09:00'},
        {label: '09:00-10:00'},
        {label: '10:00-11:00'},
        {label: '11:00-12:00'},
        {label: '12:00-13:00'},
        {label: '13:00-14:00'},
        {label: '14:00-15:00'},
        {label: '15:00-16:00'},
        {label: '16:00-17:00'},
        {label: '17:00-18:00'},
        {label: '18:00-19:00'},
        {label: '19:00-20:00'}
    ];

    return (
        <div className='input-Time'>
            <Select
                options={TimeSpansList}
                placeholder="Выберите время приема"
                required
            />
        </div>
    );
};