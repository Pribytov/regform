import React from 'react';
import { useSelector } from 'react-redux';
import { translitConvert } from '../../components/utils';

import './output-data.css';


export const OutData = () => {
    const reg = useSelector(state=>state.reg)

    debugger;
    const regTranslit = translitConvert(
        `${reg.fullName} \n
        ${reg.age} \n
        ${reg.email} \n
        ${reg.date} \n
        ${reg.address} \n
        ${reg.timespan}`
    );
    debugger;

    return (
        <div className='input-Age'>
            <pre>{regTranslit}</pre>
        </div>
    );
};