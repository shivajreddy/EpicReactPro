// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle
const Box = ({bg, class_name}) => {
  return (
    <div
      style={{backgroundColor: bg, fontStyle: 'italic'}}
      className={class_name}
    >
      small lightblue box
    </div>
  )
}

function App() {
  return (
    <div>
      <Box bg="lightblue" class_name="box box--small" />
      <Box bg="pink" class_name="box box--medium" />
      <Box bg="orange" class_name="box box--large" />
    </div>
  )
}

export default App
