import React, {useState} from "react";
const Counter = () => {
    const [count,setCount] = useState(0)
    return (
        <div>
            <button onClick={ () => {setCount(count - 1); console.log(count)}}>Decrease </button>
            <p>Count is : {count}</p>
            <button onClick={()=>setCount(count +1 )} >Increase</button>
        </div>
    )
}
export default Counter;