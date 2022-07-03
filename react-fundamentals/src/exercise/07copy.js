// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function MyApp() {
  const [items, setItems] = React.useState(allItems)

  function removeItem(target_item) {
    setItems(items.filter(item => item.id !== target_item.id))
  }

  function addItem() {
    const itemIds = items.map(item => item.id)
    const first_new_item = allItems.find(item => !itemIds.includes(item.id))
    setItems([...items, first_new_item])
  }

  return (
    <>
      <button disabled={items.length === allItems.length} onClick={addItem}>
        Add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>Remove</button>
            <label>{item.value}</label>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MyApp
