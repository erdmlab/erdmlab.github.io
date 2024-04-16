document.addEventListener('DOMContentLoaded', function () {
    const parts = document.querySelectorAll('.part');

    parts.forEach(part => {
        const revealTime = part.querySelector('.reveal-time');
        const content = part.querySelector('.content');
        const time = parseInt(revealTime.getAttribute('data-time'));

        setTimeout(() => {
            revealTime.style.display = 'none';
            content.style.display = 'block';
        }, time);
    });
});
