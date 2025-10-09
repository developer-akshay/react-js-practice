import React, {useState} from "react";
const Toggle = () => {
    const [snippet,setSnippet] = useState(true);
     const toggleButton = () =>{
        setSnippet(snippet => !snippet)
     }
    return (
        <div>
            <button onClick={toggleButton}> {snippet ? 'HIDE' : 'SHOW'}</button>
            {snippet && (<p>hello there</p>)}
        </div>
    )
}
export default Toggle;