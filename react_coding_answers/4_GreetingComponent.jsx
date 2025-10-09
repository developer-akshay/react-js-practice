// Build a greeting component that accepts a name prop and displays a personalized message.

import React from 'react'

const Greeting = ({name}) => {
  return (
    <div>
      <p>hello {name}</p>
    </div>
  )
}

export default Greeting


// and call it as       <Greeting name='yo' />