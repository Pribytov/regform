import { OutData } from '../output-data/output-data';
import './outputform.css';

export const OutForm  = (props) => {
    return (
        <div className='regform'>
            <form>
                <label>Данные для приема ко врачу:</label>
                <OutData />
            </form>
        </div>
    );
};