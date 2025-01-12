const createGameBoard = () => {
  const board = document.createElement("div");
  board.className = "game-board";
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    board.appendChild(cell);
  }
  document.body.appendChild(board);
};

const createCharacter = () => {
  const img = document.createElement("img");
  img.src = "path/to/your/image.png"; // Укажите путь к изображению
  img.className = "character";
  return img;
};

const moveCharacter = (img) => {
  const cells = document.querySelectorAll(".cell");
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * cells.length);
    cells[randomIndex].appendChild(img);
  }, 1000);
};

createGameBoard();
const character = createCharacter();
moveCharacter(character);
