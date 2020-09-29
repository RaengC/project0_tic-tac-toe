const render = function () {
  // $(myFunction).text(clickDisplay)
  $('#winner').text(horizontalWin())
}


$(document).ready(function () {


//       const startGame = displayClick();
//       horizontalWin(startGame)
//       // then check for horizontalWin()
//       // then render on DOM

    $('.box').on('click', displayClick)
        $('.box').on('click', horizontalWin)


})
