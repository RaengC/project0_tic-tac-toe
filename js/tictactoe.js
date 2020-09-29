let firstPlayer = 1;

// identify which box has been clicked so click display can add X or O appropriatly.
const displayClick = function () {
  const clickedBox = this.getAttribute("id") // finds id
  // track turn by displaying on dom
  const selectedId = `#${clickedBox}`
  // if the board is blank start with X on first click
  // then check the board to find X and make the next move O
  if (firstPlayer == 1 ) {
    $(selectedId).text('X');
    firstPlayer = 0;
  } else {
      $(selectedId).text('O')
      firstPlayer = 1
    };
};

// finds all elements in row
const row = document.getElementsByTagName('tr');
// console.log(row);

// Calculate winner horizontal
const horizontalWin = function () {
  // loop through row to identify all elements in each row
  for (let i = 0; i < row.length; i++) {
    let rowGroup = row[i];
    // console.log(rowGroup.innerText);     // rowGroup logs the three rows
    if (rowGroup.innerText === 'XXX') {
      return 'The Winner is X';
    } else if (rowGroup.innerText === 'OOO') {
        return 'The Winner is O';
    } else {
        return false;
    };
  };
  return
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
