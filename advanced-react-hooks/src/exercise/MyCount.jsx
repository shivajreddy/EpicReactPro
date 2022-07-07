import * as React from 'react'

function countReducer(state, step) {
  return state + step
}

function MyCount({initialCount = 11, step = 5}) {
  // const [count, setCount] = React.useReducer(countReducer, initialCount)

  const [count, changeCount] = React.useReducer(countReducer, initialCount)

  // const increment = () => changeCount(step)

  return <button onClick={() => changeCount(step)}>{count}</button>
}

export default MyCount
