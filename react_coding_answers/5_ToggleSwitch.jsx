// Create a toggle switch component that changes text/color when clicked.

import React, {useState} from 'react'

const ToggleSwitch = () => {
    const [toggle,setToggle] = useState(true)
    const handleToggle = () => {
        setToggle(prev=>!prev);

    }
  return (
    <div>
      <button 
        onClick={handleToggle} 
        className={toggle ? 'on' : 'off'}>
        {toggle ? 'on':'off'}
      </button>
    </div>
  )
}

export default ToggleSwitch
