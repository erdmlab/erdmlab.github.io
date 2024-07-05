$(document).ready(function() {
    $('.book').turn({
        width: 600,
        height: 400,
        autoCenter: true
    });

    $('#next').click(function() {
        $('.book').turn('next');
    });

    $('#prev').click(function() {
        $('.book').turn('previous');
    });

    $(document).on('swipeleft', function() {
        $('.book').turn('next');
    });

    $(document).on('swiperight', function() {
        $('.book').turn('previous');
    });
});
