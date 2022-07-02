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
const Box = ({bg, size = '', custom_styles, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...custom_styles}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box custom_styles={{backgroundColor: 'lightblue'}} size="small">
        small blue box
      </Box>
      <Box custom_styles={{backgroundColor: 'pink'}} size="medium">
        medium pink box
      </Box>
      <Box custom_styles={{backgroundColor: 'orange'}} size="large">
        large orange box
      </Box>
      <Box>Empty</Box>
    </div>
  )
}

export default App
