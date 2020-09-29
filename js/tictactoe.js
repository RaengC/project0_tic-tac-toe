let firstPlayer = 1;

// identify which box has been clicked so click display can add X or O appropriatly.
const displayClick = function () {
  const clickedBox = this.getAttribute("id") // finds id
  // console.log(clickedBox)
  // track turn by displaying on dom
  const selectedId = `#${clickedBox}`
  // if the board is blank start with X on first click
  // then check the board to find X and make the next move O
  if (firstPlayer == 1 ) {
    console.log('Player 1')
    $(selectedId).text('X');
    firstPlayer = 0;
  } else {
      console.log('Player 2')
      $(selectedId).text('O')
      firstPlayer = 1
    };
};

// finds all elements in row
const row = document.getElementsByTagName('tr');
// console.log(row);
const box = document.getElementsByTagName('td');
// console.log(box);

// Calculate winner horizontal
const horizontalWin = function () {
  // loop through row to identify all elements in each row
  for (let i = 0; i < row.length; i++) {
    let rowGroup = row[i];
    console.log(rowGroup.innerText);     // rowGroup logs the three rows

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

    // let rowBox = rowGroup.getElementsByClassName('box').value;
    // console.log(rowBox)

    // rowGroup.innerHTML = box.every(checkWinner)
    // if (winningCombination(rowGroup.box.val('X'))) {
    //       return 'X';
    //   } else {
    //     return 'not yet known!'
    //   }
    // for (let j = 0; j < rowGroup.length; j++) {
    //   console.log(rowGroup)
    //

    // }
    // }
    // if rowGroup has x or o three times = win!
    // if ($(rowGroup).val('X')) {
    //   console.log('win')
    //   document.getElementById("winner").innerHTML = 'Win'
    // }
  // }
