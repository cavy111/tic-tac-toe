import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[squares, setSquares] = useState(Array(9).fill(null))
  const[isXNext, setIsXNext] = useState(true)
  

  function handleClick(index){    
    if (squares[index] || calculateWinner(squares)){
      return
    }
    let newSquares = squares.slice()
    newSquares[index] = isXNext ? 'X' : 'O'
    setSquares(newSquares)
    setIsXNext(!isXNext)
  }

  const Square = ({onclick,value}) =>{
    return <button className='square' onClick={onclick}>{value}</button>
  }

  function renderSquare(index){
    return <Square value={squares[index]} onclick={()=>handleClick(index)}/>
  }

  function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (var i=0;i<lines.length; i++){
      var [a,b,c] = lines[i]
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
        return null
  }

   var winner = calculateWinner(squares)
    let s
   if (winner){
    s = 'Game over winner is: ' +winner
   }else{
    s = 'Next Turn: ' + (isXNext ? 'X': 'O')
   }

  return (
    <div>
      <span>{s}</span>
    <div style={{margin:'50px',  display: 'inline-block', padding: '10px',width:'130px'}} >
      {renderSquare(0)}      
      {renderSquare(1)}      
      {renderSquare(2)}      
      {renderSquare(3)}      
      {renderSquare(4)}      
      {renderSquare(5)}      
      {renderSquare(6)}      
      {renderSquare(7)}      
      {renderSquare(8)}      
    </div>
    </div>
  );
}

export default App;
