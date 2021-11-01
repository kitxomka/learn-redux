// import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../counterSlice';

const Counter = () => {
    // const [count, setCount] = useState(0);
    // const increment = () => {
    //     return setCount(count + 1);
    // }
    // const decrement = () => {
    //     return setCount(count - 1);
    // }

    const count = useSelector((state) => state.counter.count);
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