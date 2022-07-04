// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorage(key, defaultValue = '') {
  const [state, setState] = React.useState(() => {
    console.log('setting the initial state')
    return localStorage.getItem(key) || defaultValue
  })

  React.useEffect(() => {
    console.log('running use effect')
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [state, setState] = useLocalStorage('name')
  function handleChange(event) {
    setState(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={state} onChange={handleChange} id="name" />
      </form>
      {state ? <strong>Hello {state}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Greeting />
    </div>
  )
}

export default App
