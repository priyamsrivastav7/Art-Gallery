let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let items = document.querySelectorAll('.item');

// Auto-Play Slideshow
let slideInterval = setInterval(function() {
    next.click();
}, 10000);

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        next.click();
    } else if (event.key === 'ArrowLeft') {
        prev.click();
    }
});

// Artwork Information Toggle
items.forEach(function(item) {
    item.addEventListener('click', function() {
        this.querySelector('.content').classList.toggle('show');
    });
});

// Fullscreen Mode
let fullscreenButton = document.createElement('button');
fullscreenButton.textContent = 'Toggle Fullscreen';
document.body.appendChild(fullscreenButton);

fullscreenButton.addEventListener('click', function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

// Slide Functionality
next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});
