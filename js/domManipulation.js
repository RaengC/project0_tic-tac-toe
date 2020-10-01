
$(document).ready(function () {

    $('.box').on('click', displayClick);

    $("#clearBtn").on('click', () => {
        $('.box').empty();
        $('#winner').empty().text('Start Game');
    });
});
