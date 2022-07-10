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
      console.log('this', action)
      return {
        count: state.count + action.step,
        message: 'hi there',
        prev: state.count,
      }
    case ACTIONS.DECREMENT:
      return {
        count: state.count - action.step,
        message: 'bye there',
        prev: state.count,
      }
    default:
      return new Error(`Unsupprted action type ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 10}) {
  // const [count, setCount] = React.useReducer(reducer, initialCount)
  // const [count, changeCount] = React.useReducer(reducer, {count: initialCount})
  const [state, changeCount] = React.useReducer(reducer, {count: initialCount})

  // const increment = () => changeCount({step: step})
  return (
    <>
      {state.prev && <div>Previous number : {state.prev}</div>}
      <button onClick={() => changeCount({type: ACTIONS.DECREMENT, step})}>
        -
      </button>
      <span>{state.count}</span>
      <button onClick={() => changeCount({type: ACTIONS.INCREMENT, step})}>
        +
      </button>
    </>
  )
}

function App() {
  return (
    <>
      <Counter step={3} />
      <ReducerComp />
    </>
  )
}

export default App
