
$(document).ready(function () {

    $('.box').on('click', displayClick);
    // $('.box').on('click', aiLogic);

    $("#clearBtn").on('click', () => {
        $('.box').empty();
        $('#winner').empty().text('Start Game');
    });
});
