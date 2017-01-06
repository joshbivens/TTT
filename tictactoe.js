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

// We want the function to check each subarray and if it contains an "X", check the next spaces that would contain an "X" for a win.

function checkSpaces() {
  let temp = 0;
  for(let i = 0; i < spacesData.length; i++) {
    if(spacesData[i] == "X") {
      temp += parseInt(spaces[i].dataset.index) + 1;
    }
  }
  console.log(temp);
  return temp;
}


// =========================
// ========= NOTES =========
// =========================
// So there's there's vertical, horizontal, and diagonal wins, and 2 ways to do it: consecutively and alternately.


// function checkForWin() {
//   let curr = checkSpaces();
//   if(curr.indexOf(0) > -1 /*|| curr == [1] || curr == [3] || curr == [4]*/) {
//     if(curr.indexOf(1) > -1) {
//       setTimeout(() => spaces[2].innerHTML = "O", 700);
//     }
//   }
// }

// function computerMove() {
//   let userMove = checkSpaces();
//   switch (userMove) {
//     case 20:
//     case 19:
//       setTimeout(() => spaces[4].innerHTML = "O", 700);
//     case 14:
//     case 13:
//       setTimeout(() => spaces[2].innerHTML = "O", 700);
//     case 12:
//       setTimeout(() => spaces[1].innerHTML = "O", 700);
//     case 6:
//     case 5:
//     case 4:
//       setTimeout(() => spaces[6].innerHTML = "O", 700);
//     case 3:
//     case 2:
//     case 1:
//       setTimeout(() => spaces[8].innerHTML = "O", 700);
//       break;
//     default:
//       console.log("Make a valid move!");
//   }
// }