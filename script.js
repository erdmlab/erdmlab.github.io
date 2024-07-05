$(document).ready(function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function updateBookSize() {
        if (isMobile) {
            const width = $(window).width();
            const height = $(window).height();

            $('.book').turn('size', width, height * 0.5);

            // Ensure the orientation is horizontal
            if (window.orientation !== 90 && window.orientation !== -90) {
                alert("Please rotate your device to landscape mode for the best experience.");
            }
        } else {
            $('.book').turn('size', 800, 400);
        }
    }

    if (isMobile) {
        $('.book').turn({
            width: $(window).width(),
            height: $(window).height() * 0.5,
            autoCenter: true
        });

        $(document).on('swipeleft', function() {
            $('.book').turn('next');
        });

        $(document).on('swiperight', function() {
            $('.book').turn('previous');
        });

        window.addEventListener("orientationchange", updateBookSize);
    } else {
        $('.book').turn({
            width: 800,
            height: 400,
            autoCenter: true
        });
    }

    $(window).resize(updateBookSize);
});
