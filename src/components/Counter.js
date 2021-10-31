import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        return setCount(count + 1);
    }

    const decrement = () => {
        return setCount(count - 1);
    }
    return (
        <div style={{paddingBottom: '20px'}}>
            <p>{ count }</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;