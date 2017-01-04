const game = document.querySelector('#game');
const spacesData = [[], [], [], [], [], [], [], [], []];

const grid = spacesData.map((space, index) => `<div data-index="${index}" class="space"></div>`);
game.innerHTML = grid;

const spaces = [...document.querySelectorAll('.space')];

// Event Listeners
// spaces.map(space => space.addEventListener('click', setSide));
// spaces.map(space => space.addEventListener('click', playGame));
