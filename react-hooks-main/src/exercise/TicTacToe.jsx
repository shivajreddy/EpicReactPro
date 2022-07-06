import React from 'react'
import {useLocalStorageState} from '../utils'

// function useLocalStorage() {
//   const [squares, setSquares] = React.useState(() => {
//     const localValue = localStorage.getItem('squares')
//     if (localValue) {
//       return JSON.parse(localValue)
//     }
//     return Array(9).fill(null)
//   })

//   React.useEffect(() => {
//     localStorage.setItem('squares', JSON.stringify(squares))
//   }, [squares])

//   return [squares, setSquares]
// }

function TicTacToe() {
  const [gameHistory, setGameHistory] = useLocalStorageState('game-history', [
    Array(9).fill(null),
  ])

  // const [squares, setSquares] = useLocalStorageState(
  //   'tit-tac-toe-squares',
  //   Array(9).fill(null),
  // )

  const [currStep, setCurrentStep] = useLocalStorageState('tic-tac-toe-step', 0)

  const currSquares = gameHistory[currStep]

  const winner = calculateWinner(currSquares)
  const nextValue = calculateNextValue(currSquares)
  const status = generateStatus(winner, currSquares, nextValue)

  function selectSquare(square_idx) {
    if (winner || currSquares[square_idx]) {
      return
    }

    const newHistory = gameHistory.slice(0, currStep + 1)
    const squares = [...currSquares]

    // const newSquares = [...currSquares]
    // newSquares[square_idx] = nextValue
    // setSquares(newSquares)

    squares[square_idx] = nextValue

    // const newHistory = [...gameHistory]
    // newHistory[gamePos] = newSquares
    setGameHistory([...newHistory, squares])
    setCurrentStep(newHistory.length)
  }

  const moves = gameHistory.map((stepSquares, step) => {
    const desc = step ? `Go to #${step}` : 'Go to game start'
    // determine if its the current step, so you can disable it
    const isCurrStep = step === currStep
    return (
      <li key={step}>
        <button disabled={isCurrStep} onClick={() => setCurrentStep(step)}>
          {desc}
          {isCurrStep ? '[current]' : null}
        </button>
      </li>
    )
  })

  function renderSquare(idx) {
    return (
      <button className="square" onClick={() => selectSquare(idx)}>
        {currSquares[idx]}
      </button>
    )
  }

  function History() {
    return (
      <div>
        <p>History</p>
        {moves}
      </div>
    )
  }

  function Board() {
    return (
      <div>
        {status}
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )
  }

  // Helper Functions
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      // if (squares[a] && squares[a] === squares[b] === squares[c]) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  function generateStatus(winner, squares, nextValue) {
    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
      ? `Scratch: Cat's game`
      : `Next player: ${nextValue}`
  }

  function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
  }

  return (
    <>
      <Board />
      <History />
    </>
  )
}

export default TicTacToe
