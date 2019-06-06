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

        // document.getElementsByTagName('body').appendChild(img);
        img.src = path;
    });
};

let loadImage = (...images) => Promise.all(images.map(checkImage));

loadImage(...images);
