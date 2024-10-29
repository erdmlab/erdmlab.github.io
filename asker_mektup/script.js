$(document).ready(function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function updateBookSize() {
        if (isMobile) {
            const width = $(window).width();
            const height = $(window).height();

            $('.book').turn('size', width, height);

        } else {
            $('.book').turn('size', 600, 400);
        }
    }

    if (isMobile) {
        $('.book').turn({
            width: $(window).width(),
            height: $(window).height(),
            autoCenter: true
        });

        $(document).on('swipeleft', function() {
            $('.book').turn('next');
        });

        $(document).on('swiperight', function() {
            $('.book').turn('previous');
        });

        $(window).resize(updateBookSize);
    } else {
        $('.book').turn({
            width: 600,
            height: 400,
            autoCenter: true
        });

        $(window).resize(updateBookSize);
    }
});
