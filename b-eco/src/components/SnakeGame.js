// import "../styles/Snake.css"


// function SnakeGame() {

//   var playBoard = document.getElementById("playBoard");
//   // var playBoard = document.querySelector(".play-board");

//   const scoreElement = document.querySelector(".score");
//   const highScoreElement = document.querySelector(".high-score");
//   const controls = document.querySelectorAll(".control i");
  
//   let gameOver = false;
//   let foodX, foodY;
//   let snakeX = 5, snakeY = 5;
//   let velocityX = 0, velocityY = 0;
//   let snakeBody = [];
//   let setIntervalId;
//   let score = 0;
  
//   // Get high score from the local storage
//   let highScore = localStorage.getItem("high-score") || 0;
//   // highScoreElement.innerText = `High Score: ${highScore}`;
  
//   const updateFoodPosition = async() => {
//     // Passing a random 1 - 30 value as food position
//     foodX = Math.floor(Math.random() * 30) + 1;
//     foodY = Math.floor(Math.random() * 30) + 1;
//   }
  
//   const handleGameOver = () => {
//     // Clearing the timer and reloading the page on game over
//     clearInterval(setIntervalId);
//     alert("Game Over! Press OK to replay");
//     // location.reload();
//   }
  
//   const changeDirection = direction => {
//     //Changing velocity value based on key press
//     if(direction.key === "ArrowUp" && velocityY != -1) {
//       velocityX = 0;
//       velocityY = -1;
//     }
//     else if (direction.key === "ArrowDown" && velocityY != -1) {
//       velocityX = 0;
//       velocityY = 1;
//     }
//     else if (direction.key === "ArrowLeft" && velocityX != -1) {
//       velocityX = -1;
//       velocityY = 0;
//     }
//     else if (direction.key === "ArrowRight" && velocityX != -1) {
//       velocityX = 1;
//       velocityY = 0;
//     }
//   }
  
//   // Call changeDirection on each key click and passing key dataset value as an object
//   controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key})));
//   window.onload = function() {
//     playBoard = document.getElementById("playBoard");

//     const initGame = () => {
//       updateFoodPosition(); console.error();
//       console.log(foodX + " " + foodY);
//       if(gameOver) return handleGameOver();
//       let htmlMarkup = `<div class = "food" style = "grid-area: ${foodY} / ${foodX} " ></div>`;
//       playBoard.innerHTML = htmlMarkup;

//     }
//     initGame();
//   };



//     // Check if the snake hit the food
//     if(snakeX === foodX && snakeY === foodY){
//       updateFoodPosition();
//       snakeBody.push([foodY, foodX]); // Push food position to snake body array
//       score ++; 
//       highScore = score >= highScore ? score : highScore;
//       localStorage.setItem("high-score", highScore);
//       scoreElement.innerText = `Score: ${score}`;
//       highScoreElement.innerText = `High Score: ${highScore}`;
//     }

  
  
//     // Update snake head position based on current velocity
//     snakeX += velocityX;
//     snakeY += velocityY;
  
//     // Shifting forward the values of elements in the snake body by one
//     for (let i = snakeBody.length - 1; i > 0; i--) {
//       snakeBody[i] = snakeBody[i - 1];
//     }
//     snakeBody[0] = [snakeX, snakeY]; // Set first element of snake body to current snake position
  
//     // Chak if the snake head is out of wall, gameOver if true
//     if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
//       return gameOver = true;
//     }
  
//     for(let i = 0; i < snakeBody.length; i++){
//       // Add a div for each part of the snake's body
//       html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
//       // Check if the snake head hit the body, gameOver if true
//       if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
//         gameOver = true;
//       }
//     }
//     playBoard.innerHTML = html;
  
  
//     updateFoodPosition();
//     setIntervalId = setInterval (initGame, 100);
//     document.addEventListener("keyup", changeDirection);

//   return (
//       // <section >
//       //     <p>JUEGA AQUI</p>
//       // </section>
//       <body>
//         <div class="wrapper">
//           <div class = "game-details">
//             <span class="score">Score: 15</span>
//             <span class="high-score">High Score: 30</span>
//           </div>
//           <div id="playBoard" class="play-board"></div>
//           <div class="controls">
//             <i data-key="ArrowLeft" class = "fa-solid fa-arrow-left-long"></i>
//             <i data-key="ArrowUp" class = "fa-solid fa-arrow-up-long"></i>
//             <i data-key="ArrowRight" class = "fa-solid fa-arrow-right-long"></i>
//             <i data-key="ArrowDown" class = "fa-solid fa-arrow-down-long"></i>
//           </div>
//         </div>
//       </body>
//   )
// }

// export default SnakeGame


// import React, { useState, useEffect } from 'react';

// import '../styles/Snake.css';

// const SnakeGame = () => {
//   const [foodX, setFoodX] = useState(Math.floor(Math.random() * 30) + 1);
//   const [foodY, setFoodY] = useState(Math.floor(Math.random() * 30) + 1);
//   const [snakeX, setSnakeX] = useState(5);
//   const [snakeY, setSnakeY] = useState(5);
//   const [velocityX, setVelocityX] = useState(0);
//   const [velocityY, setVelocityY] = useState(0);
//   const [snakeBody, setSnakeBody] = useState([]);
//   const [gameOver, setGameOver] = useState(false);
//   const [score, setScore] = useState(0);
//   const [highScore, setHighScore] = useState(0);

//   useEffect(() => {
//     const handleGameOver = () => {
//       setGameOver(true);
//     };

//     const changeDirection = (direction) => {
//       // Handle direction change logic here
//     };

//     const updateFoodPosition = () => {
//       setFoodX(Math.floor(Math.random() * 30) + 1);
//       setFoodY(Math.floor(Math.random() * 30) + 1);
//     };

//     const initGame = () => {
//       updateFoodPosition();

//       if (gameOver) {
//         handleGameOver();
//         return;
//       }

//       // Your other game logic goes here

//       setScore((prevScore) => prevScore + 1);
//       setHighScore((prevHighScore) => (prevHighScore >= prevScore ? prevHighScore : prevScore));
//     };

//     // Call initGame initially
//     initGame();

//     // Set up event listeners for controls and key presses
//     // Make sure to clean up event listeners on component unmount

//     return () => {
//       // Cleanup logic (e.g., remove event listeners, clear intervals, etc.)
//     };
//   }, [gameOver]);

//   return (
//     <div className="wrapper">
//       <div className="game-details">
//         <span className="score">Score: {score}</span>
//         <span className="high-score">High Score: {highScore}</span>
//       </div>
//       <div id="playBoard" className="play-board">
//         {/* Render your game components here */}
//       </div>
//       <div className="controls">
//         <i data-key="ArrowLeft" className="fa-solid fa-arrow-left-long"></i>
//         <i data-key="ArrowUp" className="fa-solid fa-arrow-up-long"></i>
//         <i data-key="ArrowRight" className="fa-solid fa-arrow-right-long"></i>
//         <i data-key="ArrowDown" className="fa-solid fa-arrow-down-long"></i>
//       </div>
//       {gameOver && <div>Game Over!</div>}
//     </div>
//   );
// };

// export default SnakeGame;

import React, { useState, useEffect } from 'react';
import '../styles/SnakeGame.css'; // Import the CSS file

const ROWS = 10;
const COLS = 10;

const initialSnake = [
  { row: 0, col: 0 },
];

// RandomCell for food
const getRandomCell = () => ({
  row: Math.floor(Math.random() * ROWS),
  col: Math.floor(Math.random() * COLS),
});

// Array of image paths
const foodImages = [
  '../Assets/TrashPics/Bag.png',
  '../Assets/TrashPics/Banana.png',
  '../Assets/TrashPics/Bottle.png',
  '../Assets/TrashPics/BrokenGlass.png',
  '../Assets/TrashPics/Can.png',
  '../Assets/TrashPics/Foam.png',
  '../Assets/TrashPics/FoodWaste.png',
  '../Assets/TrashPics/Needle.png',
  '../Assets/TrashPics/Newspaper.png',
  '../Assets/TrashPics/PlasticBag.png',
];

const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(getRandomCell());
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);

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

  return (
    <div>
      {gameOver && <div>Game Over!</div>}
      <table>
        <body>
          {Array.from({ length: ROWS }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: COLS }).map((_, colIndex) => (
                <td
                  key={colIndex}
                  className={
                    snake.some(
                      (cell) => cell.row === rowIndex && cell.col === colIndex
                    )
                      ? 'snake-cell'
                      : food.row === rowIndex && food.col === colIndex
                      ? 'food-cell'
                      : ''
                  }
                >
                  {/* {food.row === rowIndex && food.col === colIndex && (
                  <img
                    src={foodImages[Math.floor(Math.random() * foodImages.length)]}
                    alt="Food"
                    style={{ width: '100%', height: '100%' }}
                  />
                )} */}
                </td>
              ))}
            </tr>
          ))}
        </body>
      </table>
    </div>
  );
};

export default SnakeGame;
