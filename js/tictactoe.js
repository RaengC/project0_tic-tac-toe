let firstPlayer = 1;
let winsX = 1;
let winsO = 1;
const winnerX = 'The Winner is X';
const winnerO = 'The Winner is O';
const row = document.getElementsByTagName('tr'); // for horizontalWin
const box = document.getElementsByTagName('td'); // for diagonalWin
const firstVertical = document.getElementsByClassName("1"); // for verticalWin
const secondVertical = document.getElementsByClassName('2'); // for verticalWin
const thirdVertical = document.getElementsByClassName('3'); // for verticalWin

const displayClick = function () {
  const clickedBox = this.getAttribute("id"); // finds id
  const selectedId = `#${clickedBox}`;
  if (firstPlayer == 1 ) {
    $(selectedId).text('X');
    firstPlayer = 0;
  } else {
      $(selectedId).text('O');
      firstPlayer = 1;
    };

  let horizontal = horizontalWin();
  let vertical = verticalWin();
  let diagonal = diagonalWin();

  // check for winner
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
  } else {
  };
};

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
