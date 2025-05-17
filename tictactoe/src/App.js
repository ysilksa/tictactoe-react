import './App.css';
import { useState } from 'react';
import Square from './components/Shape.jsx';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  // define handleClick function in board
  function handleClick(curr) {
    const nextSquares = squares.slice(); 
    nextSquares[curr] = "X";
    setSquares(nextSquares);
  }
  // => is arrow function

  return (
    <div className="App">
      <div className="board-row">
        <Square value={squares[0]} clickHandler={() => handleClick(0)}/>
        <Square value={squares[1]} clickHandler={() => handleClick(1)}/>
        <Square value={squares[2]} clickHandler={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} clickHandler={() => handleClick(3)}/>
        <Square value={squares[4]} clickHandler={() => handleClick(4)}/>
        <Square value={squares[5]} clickHandler={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} clickHandler={() => handleClick(6)}/>
        <Square value={squares[7]} clickHandler={() => handleClick(7)}/>
        <Square value={squares[8]} clickHandler={() => handleClick(8)}/>
      </div> 
    </div>
  );
}

export default App;
