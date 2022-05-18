/* eslint-disable react/button-has-type */
import React, { useState } from 'react'
import './App.css'

function Counter() {
  const [counter, setCounter] = useState<number>(0)
  const handleCounter = operation => {
    if (operation === 'add') {
      return setCounter(counter + 1)
    }
    return setCounter(counter - 1)
  }
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Counter: {counter} <br />
          <button onClick={() => handleCounter('add')}>+ Add</button>
          <button onClick={() => handleCounter('subtract')}>- Subtract</button>
        </p>
      </div>
    </div>
  )
}

export default Counter
