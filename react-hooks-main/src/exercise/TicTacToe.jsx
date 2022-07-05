import React from 'react'

function TicTacToe() {
  // state to track the x,o array
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const winner = calculateWinner(squares)
  const nextValue = calculateNextValue(squares)
  const status = generateStatus(winner, squares, nextValue)

  console.log(winner)
  function selectSquare(square_idx) {
    if (winner || squares[square_idx]) return
    console.log('button', square_idx)
    const newSquares = [...squares]
    newSquares[square_idx] = nextValue
    setSquares(newSquares)
  }

  function resetBoard() {
    setSquares(Array(9).fill(null))
  }

  function renderSquare(idx) {
    return (
      <button className="square" onClick={() => selectSquare(idx)}>
        {squares[idx]}
      </button>
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
        <button className="restart" onClick={resetBoard}>
          Reset
        </button>
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

  return <Board />
}

export default TicTacToe
