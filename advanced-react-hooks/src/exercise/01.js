// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import ReducerComp from './ReducerComp'

function reducer(state, {step}) {
  return state + step
}

function Counter({initialCount = 0, step = 10}) {
  // const [count, setCount] = React.useReducer(reducer, initialCount)
  const [count, changeCount] = React.useReducer(reducer, initialCount)

  const increment = () => changeCount({step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return (
    <>
      {/* <Counter /> */}
      <ReducerComp />
    </>
  )
}

export default App
