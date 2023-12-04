import React, { useState, useEffect, Button } from 'react';
import '../styles/SnakeGame.css'; // Import the CSS file
import preGameImage from '../Assets/gameIntro.jpeg';

const ROWS = 10;
const COLS = 10;

// RandomCell for food
const getRandomCell = () => ({
  row: Math.floor(Math.random() * ROWS),
  col: Math.floor(Math.random() * COLS),
  randomNumber: Math.floor(Math.random() * (9 - 0 + 1)) + 0,
});

// Array of image paths
const foodImages = [
  'food-cell',
  'food-cell2',
  'food-cell3',
  'food-cell4',
  'food-cell5',
  'food-cell6',
  'food-cell7',
  'food-cell8',
  'food-cell9',
  'food-cell10',
];

const SnakeGame = () => {
  const initialSnake = [{ row: 0, col: 0 }];
  const initialFood = getRandomCell();
  const initialDirection = 'RIGHT';
  const initialScore = 0;

  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(getRandomCell());
  const [direction, setDirection] = useState('RIGHT');

  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // 
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);


  function play() {
    setGameStarted(true); // Set game as started when "Play" button is clicked
  }

  const handleKeyPress = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        setDirection('UP');
        break;
      case 'ArrowDown':
        setDirection('DOWN');
        break;
      case 'ArrowLeft':
        setDirection('LEFT');
        break;
      case 'ArrowRight':
        setDirection('RIGHT');
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    const handleGameTick = () => {
      if (gameOver) return;

      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.row = (head.row - 1 + ROWS) % ROWS;
          break;
        case 'DOWN':
          head.row = (head.row + 1) % ROWS;
          break;
        case 'LEFT':
          head.col = (head.col - 1 + COLS) % COLS;
          break;
        case 'RIGHT':
          head.col = (head.col + 1) % COLS;
          break;
        default:
          break;
      }

      newSnake.unshift(head);

      if (head.row === food.row && head.col === food.col) {
        setScore(score + 1);
        setFood(getRandomCell());
      } else {
        newSnake.pop();
      }

      if (
        newSnake.some(
          (segment, index) =>
            index !== 0 && segment.row === head.row && segment.col === head.col
        )
      ) {
        setGameOver(true);
        if(score > highestScore){
          setHighestScore(score) 
        }
      }
      setSnake(newSnake);
    };

    const intervalId = setInterval(handleGameTick, 300);

    return () => clearInterval(intervalId);
  }, [snake, direction, food, gameOver]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);    };
  }, []);

  function restartGame() {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection(initialDirection);
    setGameOver(false);
    setScore(initialScore);
  }

  // Function to check if a cell is the head of the snake
  const isSnakeHead = (cell, index) => index === 0;

  return (
    <gameContainer>
      {!gameStarted && ( // Display content only if game hasn't started
        <div className="pre-game-content">
          <img 
            src={preGameImage} 
            // alt="Pre-game image"
            style={{ width: '50rem', height: '40rem' }}
           />
        </div>  
      )}
      {gameStarted && (
        <div>
          <container>
            <table>
              <body>
              {Array.from({ length: ROWS }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: COLS }).map((_, colIndex) => {
                    const isSnakeCell = snake.some(
                      (cell) => cell.row === rowIndex && cell.col === colIndex
                    );

                    return (
                      <td
                        key={`${rowIndex}-${colIndex}`}
                        className={
                          isSnakeCell
                            ? isSnakeHead(
                                { row: rowIndex, col: colIndex },
                                snake.findIndex(
                                  (cell) =>
                                    cell.row === rowIndex && cell.col === colIndex
                                )
                              )
                              ? 'snake-cell head'
                              : 'snake-cell body'
                            : food.row === rowIndex && food.col === colIndex
                            ? foodImages[food.randomNumber]
                            : ''
                        }
                      ></td>
                    );
                  })}
                </tr>
              ))}
            </body>
          </table>
        </container>
      </div>
    )}

      <div className="play-buttons">
        {!gameStarted && ( // Show "Play" button only if game hasn't started
          <button className="custom-button" onClick={() => { play() }}>
            Click me to Play!
          </button>
        )}
        {gameOver && ( // Show "Play" button only if game hasn't started
          <button className="custom-button" onClick={() => { restartGame() }}>
            Let's play again!
          </button>
        )}
        <container className="score-button">
          Score: {score}
        </container>
        <container className="score-button">
          Highest Score: {highestScore}
        </container>
      </div>

    </gameContainer>
  );
};



export default SnakeGame;
