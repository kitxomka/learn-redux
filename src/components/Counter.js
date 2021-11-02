import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../counterReducer';
import { counterSelector } from '../selectors';

const Counter = () => {
    
    const count = useSelector(counterSelector);
    const dispatch = useDispatch();

    return (
        <div style={{paddingBottom: '20px'}}>
            <h1>The counter is: { count }</h1>
            <button onClick={() => dispatch(increment())}>Increment</button> 
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter;