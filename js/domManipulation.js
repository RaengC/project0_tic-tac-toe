
$(document).ready(function () {

  // Call displayClick function when box clicked in game
  $('.box').on('click', displayClick);

  // Activate Reset Button
  // Clears board of all values
  // Resets winning message to empty then adds orginal message back
  $("#clearBtn").on('click', () => {
    $('.box').empty();
    $('#winner').empty().text('Start Game');
  });
});
