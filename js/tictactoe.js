let firstPlayer = 1;
let board;

const displayClick = function () {
  const clickedBox = this.getAttribute("id") // finds id
  const selectedId = `#${clickedBox}`
  if (firstPlayer == 1 ) {
    $(selectedId).text('X');
    firstPlayer = 0;
  } else {
      $(selectedId).text('O')
      firstPlayer = 1
    };

  let horizontal = horizontalWin();
  let vertical = verticalWin();
  let diagonal = diagonalWin();

  // check for winner
  if (horizontal) {
    $('#winner').text(horizontalWin());
  } else if (vertical) {
    return $('#winner').text(verticalWin());
  } else if (diagonal) {
    return $('#winner').text(diagonalWin());
  } else {
  };
};

const row = document.getElementsByTagName('tr');

const horizontalWin = function () {
  for (let i = 0; i < row.length; i++) {
    let rowGroup = row[i];
    if (rowGroup.innerText === 'XXX') {
      return 'The Winner is X';
    } else if (rowGroup.innerText === 'OOO') {
        return 'The Winner is O';
    };
  };
  return false;
};

const firstVertical = document.getElementsByClassName("1")
const secondVertical = document.getElementsByClassName('2')
const thirdVertical = document.getElementsByClassName('3')

const verticalWin = function () {
    if (firstVertical[0].innerText === 'X' && firstVertical[1].innerText === 'X' && firstVertical[2].innerText === 'X') {
      return 'The Winner is X';
    } else if (secondVertical[0].innerText === 'X' && secondVertical[1].innerText === 'X' && secondVertical[2].innerText === 'X') {
      return 'The Winner is X';
    } else if (thirdVertical[0].innerText === 'X' && thirdVertical[1].innerText === 'X' && thirdVertical[2].innerText === 'X') {
      return 'The Winner is X';
    } else if (firstVertical[0].innerText === 'O' && firstVertical[1].innerText === 'O' && firstVertical[2].innerText === 'O') {
      return 'The Winner is O';
    } else if (secondVertical[0].innerText === 'O' && secondVertical[1].innerText === 'O' && secondVertical[2].innerText === 'O') {
      return 'The Winner is O';
    } else if (thirdVertical[0].innerText === 'O' && thirdVertical[1].innerText === 'O' && thirdVertical[2].innerText === 'O') {
      return 'The Winner is O';
    } else {
      return false;
    };
  };

const box = document.getElementsByTagName('td');

const diagonalWin = function () {
  if (box[0].innerText === 'X' && box[4].innerText === 'X' && box[8].innerText === 'X') {
    return 'The Winner is X';
  } else if (box[0].innerText === 'O' && box[4].innerText === 'O' && box[8].innerText === 'O') {
    return 'The Winner is O';
  } else if (box[2].innerText === 'O' && box[4].innerText === 'O' && box[6].innerText === 'O') {
    return 'The Winner is O';
  } else if (box[2].innerText === 'X' && box[4].innerText === 'X' && box[6].innerText === 'X')  {
    return 'The Winner is X';
  } else {
    return false
  };
};
