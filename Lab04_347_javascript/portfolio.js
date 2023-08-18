window.addEventListener('load', function() {
    const imageContainer = document.querySelector('.image-container');
    const image = imageContainer.querySelector('img');
    
    const containerSize = imageContainer.offsetWidth;
    image.style.maxWidth = containerSize + 'px';
});
