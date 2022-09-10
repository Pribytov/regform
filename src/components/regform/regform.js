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

    const validateInputs = () => {
        if (regState.fullName == null) {
            alert('Введите корректное значение ФИО');
            return false;
        } else if (regState.age === 0) {
            alert('Введите корректное значение возраста');
            return false;
        } else if (regState.email == null) {
            alert('Введите корректное значение email');
            return false;
        } else if (regState.date == null) {
            alert('Введите корректное значение даты');
            return false;
        } else if (regState.address == null) {
            alert('Введите корректное значение адреса');
            return false;
        } else if (regState.timespan == null) {
            alert('Введите корректное значение времени приема');
            return false;
        }
        return true;
    }

    const clickHandler = (e) => {
        e.preventDefault();

        if (!validateInputs())
            return;

        dispatch(sendRegData(regState));;

        navigate('/outputform');
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
            <form>
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