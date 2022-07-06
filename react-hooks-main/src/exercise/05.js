// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
// eslint-disable-next-line no-unused-vars
import VanillaTilt from 'vanilla-tilt'

// function MyRefDiv() {
//   const myRef = React.useRef()

//   React.useEffect(() => {
//     console.log('the dom node is', myRef.current)
//   })

//   return (
//     <>
//       <div ref={myRef}>Something</div>
//       <h2>Another thing</h2>
//     </>
//   )
// }

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()
  const tiltNode = React.useRef()

  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  // 💰 like this:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  React.useEffect(() => {
    const tiltRoot = tiltNode.current
    VanillaTilt.init(tiltRoot, {
      max: 15,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })
    // return () => tiltRoot.VanillaTilt.destroy()
  }, [])
  //
  // 💰 Don't forget to return a cleanup function. VanillaTilt.init will add an
  // object to your DOM node to cleanup:
  // `return () => tiltNode.vanillaTilt.destroy()`
  //
  // 💰 Don't forget to specify your effect's dependencies array! In our case
  // we know that the tilt node will never change, so make it `[]`. Ask me about
  // this for a more in depth explanation.

  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div ref={tiltNode} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
      <p> Hello There</p>
    </Tilt>
  )
}

export default App
