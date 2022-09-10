import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import './dadata.css';


export const Dadata = ({updateData}) => {
    const setValue = (e) => {
        updateData(e.value);
    }

    return (
        <div className='input-Date'>
            <label>Введите город проживания и улицу:</label>
            <AddressSuggestions
                token="a19e1a7459844b0a8c491107853297016f483a4e"
                onChange={setValue}
            />
        </div>
    );
};