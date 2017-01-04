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
  console.log(this)
}

// For later: think about the relationship between the spacesData array and the spaces that came from it.
// How will we, when you click on a space, add a 'true' or 'X' to the corresponding subarray in spacesData?

function checkSpaces() {
  for(let i = 0; i < spacesData.length; i++) {
    // ??? We need to figure out setSide first!
  }
}
