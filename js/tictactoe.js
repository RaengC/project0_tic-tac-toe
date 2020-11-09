let firstPlayer = 1;
let winsX = 1;
let winsO = 1;
const winnerX = 'The Winner is X';
const winnerO = 'The Winner is O';
const draw = "It's a draw! Try again."
const row = document.getElementsByTagName('tr'); // for horizontalWin
const box = document.getElementsByTagName('td'); // for diagonalWin
console.log(box)
const firstVertical = document.getElementsByClassName('1'); // for verticalWin
const secondVertical = document.getElementsByClassName('2'); // for verticalWin
const thirdVertical = document.getElementsByClassName('3'); // for verticalWin

// Interaction with DOM on click and checks for winner
const displayClick = function () {
  const clickedBox = this.getAttribute('id'); // finds id of clicked box
  const selectedId = `#${clickedBox}`;
  // Sets players turn and associated icon
  if (firstPlayer == 1 ) {
    $(selectedId).text('X');
    firstPlayer = 0;
  } else {
      $(selectedId).text('O');
      firstPlayer = 1;
    };

  // connects logic for different win functions
  let horizontal = horizontalWin();
  let vertical = verticalWin();
  let diagonal = diagonalWin();
  let noWinner = checkDraw();

  // Check for winner through win functions
  // Display winning message on DOM
  // Increases score board on DOM by 1 for winner
  if (horizontal) {
    $('#winner').text(horizontalWin());
    if (horizontal === winnerX) {
      $('#winsX').text(winsX++);
    } else {
      $('#winsO').text(winsO++);
    };
  } else if (vertical) {
    $('#winner').text(verticalWin());
    if (vertical === winnerX) {
      $('#winsX').text(winsX++);
    } else {
      $('#winsO').text(winsO++);
    };
  } else if (diagonal) {
    $('#winner').text(diagonalWin());
    if (diagonal === winnerX) {
      $('#winsX').text(winsX++);
    } else {
      $('#winsO').text(winsO++);
    };
  } else if (draw) {
    $('#winner').text(checkDraw())
  } else {
  };
};

// Check for draw
// Checks each array in box for X or O
// If true return draw
// maybe use !== ???? not sure on this iwth current set up.. 
const checkDraw = function () {
  if (box[0].innerText === 'X' || box[0].innerText === 'O' && box[1].innerText === 'X' || box[1].innerText === 'O'
  && box[2].innerText === 'X' || box[2].innerText === 'O' && box[3].innerText === 'X' || box[3].innerText === 'O'
  && box[4].innerText === 'X' || box[4].innerText === 'O' && box[5].innerText === 'X' || box[5].innerText === 'O'
  && box[6].innerText === 'X' || box[6].innerText === 'O' && box[7].innerText === 'X' || box[7].innerText === 'O'
  && box[8].innerText === 'X' || box[8].innerText === 'O') {
    return draw;
  } else {
  };
};

// Loops through grid rows 'tr'
// Identifies if winning combo displayed through innerText
// If true returns winner
const horizontalWin = function () {
  for (let i = 0; i < row.length; i++) {
    let rowGroup = row[i];
    if (rowGroup.innerText === 'XXX') {
      return winnerX;
    } else if (rowGroup.innerText === 'OOO') {
        return winnerO;
    };
  };
  return false;
};

// Created three arrays of vertical columns by class name 1, 2 & 3
// Checked each index in array had strict equality to X or O respectively
// If true returns winner
const verticalWin = function () {
    if (firstVertical[0].innerText === 'X' && firstVertical[1].innerText === 'X' && firstVertical[2].innerText === 'X') {
      return winnerX;
    } else if (secondVertical[0].innerText === 'X' && secondVertical[1].innerText === 'X' && secondVertical[2].innerText === 'X') {
      return winnerX;
    } else if (thirdVertical[0].innerText === 'X' && thirdVertical[1].innerText === 'X' && thirdVertical[2].innerText === 'X') {
      return winnerX;
    } else if (firstVertical[0].innerText === 'O' && firstVertical[1].innerText === 'O' && firstVertical[2].innerText === 'O') {
      return winnerO;
    } else if (secondVertical[0].innerText === 'O' && secondVertical[1].innerText === 'O' && secondVertical[2].innerText === 'O') {
      return winnerO;
    } else if (thirdVertical[0].innerText === 'O' && thirdVertical[1].innerText === 'O' && thirdVertical[2].innerText === 'O') {
      return winnerO;
    } else {
      return false;
    };
  };

// Created array of table boxes 'td'
// Identified two winning combinations for diagonal win and associated index
// Checked index had strict equality to X or O respectively
// If true returns winner
const diagonalWin = function () {
  if (box[0].innerText === 'X' && box[4].innerText === 'X' && box[8].innerText === 'X') {
    return winnerX;
  } else if (box[0].innerText === 'O' && box[4].innerText === 'O' && box[8].innerText === 'O') {
    return winnerO;
  } else if (box[2].innerText === 'O' && box[4].innerText === 'O' && box[6].innerText === 'O') {
    return winnerO;
  } else if (box[2].innerText === 'X' && box[4].innerText === 'X' && box[6].innerText === 'X')  {
    return winnerX;
  } else {
    return false;
  };
};
