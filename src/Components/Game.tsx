import React,{useState} from 'react'
import {calculateWinner} from '../Helper'
import Board from "./Board";

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick:Function = (index:number) => {
        const boardCopy = [...board]

        if (winner || boardCopy[index]) return;

        boardCopy[index] = xIsNext ? "X" : "0";

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const startNewGame:Function = ():React.ReactElement => {
        return (
          <button
            className="start__btn"
            onClick={() => setBoard(Array(9).fill(null))}
          >
            Clear Game Board
          </button>
        );
      };

    return (
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p>{winner ? `${winner} Wins` : "Now Is " + (xIsNext ? "X" : "0")}</p>
        </div>
    )
}

export default Game