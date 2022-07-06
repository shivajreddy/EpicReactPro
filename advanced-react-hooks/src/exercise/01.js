// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(count, dispatch) {
  return dispatch
}

function Counter({initialCount = 0, step = 1}) {
  //🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, setCount] = React.useReducer(countReducer, initialCount)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function MyCounter(step = 1, initialCount = 0) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  console.log('count', count)
  console.log('dispatch', setCount)
  return <button>{}hi</button>
}

function App() {
  return (
    <>
      <Counter />
      <MyCounter />
    </>
  )
  /*

  */
}

export default App
