import "./style.css"; // Подключение стилей

const createGameField = () => {
  const field = document.createElement("div");
  field.classList.add("game-field");
  field.style.display = "grid";
  field.style.gridTemplateColumns = "repeat(4, 100px)";
  field.style.gridTemplateRows = "repeat(4, 100px)";
  field.style.gap = "5px";
  document.body.appendChild(field);

  for (let i = 0; i < 16; i++) {
    const hole = document.createElement("div");
    hole.classList.add("hole");
    hole.style.width = "100px";
    hole.style.height = "100px";
    hole.style.border = "1px solid black";
    field.appendChild(hole);
  }

  return field;
};

const createCharacter = () => {
  const img = document.createElement("img");
  img.src = "path/to/your/image.png"; // Замените на путь к вашему изображению
  img.style.width = "100%";
  img.style.height = "100%";
  return img;
};

const moveCharacter = (img, field) => {
  const holes = field.children;
  let currentIndex = Math.floor(Math.random() * holes.length);
  holes[currentIndex].appendChild(img);

  setInterval(() => {
    const newIndex = Math.floor(Math.random() * holes.length);
    if (newIndex !== currentIndex) {
      holes[newIndex].appendChild(img);
      currentIndex = newIndex;
    }
  }, 1000);
};

const initGame = () => {
  const field = createGameField();
  const character = createCharacter();
  moveCharacter(character, field);
};

window.onload = initGame;
