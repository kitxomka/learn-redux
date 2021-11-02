import { useSelector, useDispatch } from 'react-redux';
import { multiplied, division } from '../counterBReducer';
import { counterBSelector } from '../selectors';

const CounterB = () => {
    
    const count = useSelector(counterBSelector);
    const dispatch = useDispatch();



    return (
        <div style={{paddingBottom: '20px'}}>
            <h1>The counter B is: { count }</h1>
            <button onClick={() => dispatch(multiplied())}>Multiplied</button> 
            <button onClick={() => dispatch(division())}>Division</button>
        </div>
    )
}

export default CounterB;