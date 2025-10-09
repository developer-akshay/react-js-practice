// 1. Build a counter component with increment, decrement, and reset buttons using useState.

import React, {useState} from 'react';

const Counter = () => {
    const [count,setCount] = useState(0);
    return (
        <>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>increment</button>
                <p>{count}</p>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}

export default Counter