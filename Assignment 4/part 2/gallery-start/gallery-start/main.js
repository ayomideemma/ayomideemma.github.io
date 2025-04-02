// Name: Aderinboye Ayomide Emmnauel
// File: index.html
// Date: 18 march 2025
// Student ID: 100994931
// Description: Giving the ability of darken/whiten button effect on a image by making it darker and lighter at the click of the darken/whiten button.


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg': 'A scenic mountain view',
    'pic2.jpg': 'A beautiful sunset over the ocean',
    'pic3.jpg': 'A lush green forest',
    'pic4.jpg': 'A city skyline at night',
    'pic5.jpg': 'A serene desert landscape'
};

/* Looping through images */

imageFiles.forEach(image => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);

    // Click event to update the displayed image
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', `images/${image}`);
        displayedImage.setAttribute('alt', altText[image]);
    });
});

// Wiring up the Darken/Lighten button
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});