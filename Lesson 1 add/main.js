document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
    ]
    
    const checkImage = path => {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(path);
            img.onerror = () => console.error(`${path} not found`);
    
            img.src = path;
        });
    };
    
    let loadImage = (...images) => Promise.all(images.map(checkImage))
        .then(() => {
            for (let image of images) {
                const img = `<img src="${image}"/>`;
                document.body.innerHTML += img;
            }
        });
    
    loadImage(...images);
});

