import React from 'react'
import { useState } from 'react'

const App = () => {
  // let count =0;

  
  let [count, setCount] =useState(0)

  function increseNumber(){
    // count++
    setCount(count+1);
    
  }

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increseNumber}>increase {count}</button>
    </div>
  )
}

export default App