import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { InputFullName } from '../../components/input-fullname';
import { InputAge } from '../../components/input-age';
import { InputEmail } from '../../components/input-email';
import { InputDate } from '../../components/input-date';
import { InputTime } from '../../components/input-time';
import { Dadata } from '../../components/dadata';
import { sendRegData } from '../../redux/reg/reducer';
import './regform.css';


import { useSelector } from 'react-redux';

export const RegForm  = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const regState = {
        fullName: null,
        age: 0,
        email: null,
        date: null,
        address: null,
        timespan: null
    };

    const clickHandler = (e) => {
        e.preventDefault();
        //debugger
        console.log(regState);
        debugger;
        dispatch(sendRegData(regState));;
        debugger;

        navigate('/outputform');

        //return false;
    }

    const updateFullName = (value) => {
        regState.fullName = value;
    };

    const updateAge = (value) => {
        regState.age = value;
    };

    const updateEmail = (value) => {
        regState.email = value;
    };

    const updateDate = (value) => {
        regState.date = value;
    };

    const updateAddress = (value) => {
        regState.address = value;
    };
 
    const updateTimespan = (value) => {
        regState.timespan = value;
    };

    return (
        <div className='regform'>
            <form onSubmit="return Complete();">
                <label>Запись на прием ко врачу:</label>
                <InputFullName updateData={updateFullName}/>
                <InputAge updateData={updateAge}/>
                <InputEmail updateData={updateEmail}/>
                <InputDate updateData={updateDate}/>
                <Dadata updateData={updateAddress}/>
                <InputTime updateData={updateTimespan}/>

                <button
                    type='submit'
                    onClick={clickHandler}
                >Записаться</button>
            </form>
        </div>
    );
};