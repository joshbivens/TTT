const game = document.querySelector('#game');
const spacesData = [[], [], [], [], [], [], [], [], []];

// Make the playing field
const grid = spacesData.map((space, index) => `<div data-index="${index}" class="space"></div>`);
game.innerHTML = grid;
const spaces = [...document.querySelectorAll('.space')];

// Event Listeners
spaces.map(space => space.addEventListener('click', setSide));
spaces.map(space => space.addEventListener('click', computerMove));

function setSide() {
  this.innerHTML = "X";
  // Access data- property: this.dataset.index
  spacesData[this.dataset.index].push("X");
  console.log(spacesData);
  
}

function checkSpaces() {
  let temp = 0;
  for(let i = 0; i < spacesData.length; i++) {
    // Run through each space
    if(spacesData[i] == "X") {
      temp += parseInt(spaces[i].dataset.index)
    }
  }
  console.log(temp);
  return temp;
}

// Seems to be working for a few case, but feels very inefficient
function computerMove() {
  let userMove = checkSpaces();
  switch (userMove) {
    case 17:
      setTimeout(() => spaces[8].innerHTML = "O", 700);
      break;
    case 14:
      setTimeout(() => spaces[5].innerHTML = "O", 700);
      break;
    case 13:
    case 8:
      setTimeout(() => spaces[4].innerHTML = "O", 700);
      break;
    case 10:
      setTimeout(() => spaces[2].innerHTML = "O", 700);
      break;
    case 6:
    case 3:
      setTimeout(() => spaces[6].innerHTML = "O", 700);
      break;
    case 1:
      setTimeout(() => spaces[2].innerHTML = "O", 700);
      break;
    case 0:
      setTimeout(() => spaces[8].innerHTML = "O", 700);
      break;
    default:
      alert("Make a valid move!");
  }
}