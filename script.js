$(document).ready(function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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

        // Ensure the orientation is horizontal
        window.addEventListener("orientationchange", function() {
            if (window.orientation !== 90 && window.orientation !== -90) {
                alert("Please rotate your device to landscape mode for the best experience.");
            }
        });

        // Check initial orientation
        if (window.orientation !== 90 && window.orientation !== -90) {
            alert("Please rotate your device to landscape mode for the best experience.");
        }
    } else {
        $('.book').turn({
            width: 600,
            height: 400,
            autoCenter: true
        });
    }
});
