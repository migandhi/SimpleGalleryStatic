const imageFolder = ''; // Change this to your images folder path
const images = ['logo_00002_.png', 'logo_00003_.png', 'logo_00004_.png', 'logo_00005_.png']; // Add your image filenames here

let currentIndex = 0;

function displayImage(index) {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-container img');

    mainImage.src = imageFolder + images[index];

    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === index);
    });

    updatePageNumbers();
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    displayImage(currentIndex);
}

function updatePageNumbers() {
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = images.map((_, i) => {
        return `<button onclick="goToImage(${i})">${i + 1}</button>`;
    }).join(' ');
}

function goToImage(index) {
    currentIndex = index;
    displayImage(index);
}

function createThumbnails() {
    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = images.map((image, index) => {
        return `<img src="${imageFolder + image}" onclick="goToImage(${index})">`;
    }).join('');
}

window.onload = function() {
    createThumbnails();
    displayImage(currentIndex);
};
