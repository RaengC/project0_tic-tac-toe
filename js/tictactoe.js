let firstPlayer = 1;

// identify which box has been clicked so click display can add X or O appropriatly.
const findClickId = function () {
  const clickedBox = this.getAttribute("id") // finds id
  console.log(clickedBox)
  // track turn by displaying on dom
  const selectedId = `#${clickedBox}`

  // if the board is blank start with X on first click
  // then check the board to find X and make the next move O
  if (firstPlayer == 1 ) {
    console.log('first move')
    $(selectedId).text('X');
    firstPlayer = 0;
  } else {
      console.log('second move')
      $(selectedId).text('O')
      firstPlayer = 1
    };
};
