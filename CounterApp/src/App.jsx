import { useState } from 'react'

import React from 'react'


function Buttons({action, count, setCount}) {
  function handleClick() {
    switch(action){
      case "Increment":
        setCount((prevCount) => prevCount + 1);
        break;
      case "Decrement":
        setCount((prevCount) => prevCount - 1);
        break;
      case "Reset":
        setCount(0);
        break;
    }
  }


  return (
    <>
    <button onClick={handleClick}> {action} </button>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Counter: {count}</h2>
      <Buttons action="Increment"  setCount={setCount}>
        Increment
      </Buttons>
      <Buttons action="Decrement"  setCount={setCount}>
        Decrement
      </Buttons>
      <Buttons action="Reset"  setCount={setCount}>
        Reset
      </Buttons>
    </>
  )
}



export default function App() {
  
  
  return (
    <>
      <Counter />
    </>
  )
}

