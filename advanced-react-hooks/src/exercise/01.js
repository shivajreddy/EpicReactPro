// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import ReducerComp from './ReducerComp'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      return new Error(`Action type not found ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 10}) {
  // const [count, setCount] = React.useReducer(reducer, initialCount)
  // const [count, changeCount] = React.useReducer(reducer, {count: initialCount})
  const [state, changeCount] = React.useReducer(reducer, {count: initialCount})

  // const increment = () => changeCount({step: step})
  return (
    <>
      <button onClick={() => changeCount({type: ACTIONS.DECREMENT})}>-</button>
      <span>{state.count}</span>
      <button onClick={() => changeCount({type: ACTIONS.INCREMENT})}>+</button>
    </>
  )
}

function App() {
  return (
    <>
      <Counter />
      {/* <ReducerComp /> */}
    </>
  )
}

export default App
