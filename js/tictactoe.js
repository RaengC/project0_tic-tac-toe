// identify which box has been clicked so click display can add X or O appropriatly.
const findClickId = function () {
  const clickedBox = this.getAttribute("id") // finds id
  console.log(clickedBox)
  // track turn by displaying on dom
  $(`#${clickedBox}`).text('X');
}


const takeTurns = function () {
  const firstPlayer = 'X';
  console.log(firstPlayer);
};
