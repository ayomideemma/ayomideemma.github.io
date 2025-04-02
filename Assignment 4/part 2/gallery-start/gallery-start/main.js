// Name: Aderinboye Ayomide Emmnauel
// File: index.html
// Date: 18 march 2025
// Student ID: 100994931
// Description: A button generates a random silly story, replacing "Bob" with a custom name if provided and converting US units to UK equivalents if the UK option is selected.


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

/* Wiring up the Darken/Lighten button */
