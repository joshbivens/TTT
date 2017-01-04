const game = document.querySelector('#game');
const spacesData = [[], [], [], [], [], [], [], [], []];

// Make the playing field
const grid = spacesData.map((space, index) => `<div data-index="${index}" class="space"></div>`);
game.innerHTML = grid;
const spaces = [...document.querySelectorAll('.space')];

// Event Listeners
spaces.map(space => space.addEventListener('click', setSide));
// spaces.map(space => space.addEventListener('click', playGame));

function setSide() {
  this.innerHTML = "X";
  // Access data- property: this.dataset.index
  spacesData[this.dataset.index].push("X");
  console.log(spacesData);
  
}

// function checkSpaces() {
//   for(let i = 0; i < spacesData.length; i++) {
    
//   }
// }
