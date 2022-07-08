import React from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  ADD_TODO: 'add-todo',
}

function reducer(state, action) {
  // const newTodoList = [...state]
  const newTodoObject = newTodo(action.payLoad.text)
  return [...state, newTodoObject]
}

function newTodo(text) {
  return {id: Date.now(), text: text, complete: false}
}

function ReducerComp() {
  const [state, dispatch] = React.useReducer(reducer, [])
  const [todoText, setTodoText] = React.useState('')

  function handleChange(event) {
    // dispatch({newTodo: event.target.value})
    setTodoText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (todoText === '') return
    dispatch({type: ACTIONS.ADD_TODO, payLoad: {text: todoText}})
    setTodoText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Text</label>
        <input
          id="todo-input"
          type="text"
          value={todoText}
          onChange={handleChange}
        />
        <button>push</button>
      </form>
      {state.map(item => (
        <div key={item.id}>
          {/* <input type="checkbox" checked={item.complete} /> */}
          {item.text}
        </div>
        // <p key={item.id}>{item.text}</p>
      ))}
    </div>
  )
}

export default ReducerComp
