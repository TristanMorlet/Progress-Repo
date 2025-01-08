const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */


const fileNames = {
    pic1: 'images/pic1.jpg',
    pic2: 'images/pic2.jpg',
    pic3: 'images/pic3.jpg',
    pic4: 'images/pic4.jpg',
    pic5: 'images/pic5.jpg'
};


/* Declaring the alternative text for each image file */

const imageAltText = {
    pic1: 'Closeup of a human eye',
    pic2: 'painting i think',
    pic3: 'Lavenders',
    pic4: 'Egyptians n Shit',
    pic5: 'Butterfly'
};





/* Looping through images */

for (const key in fileNames){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', fileNames[key]);
    newImage.setAttribute('alt', imageAltText[key]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', fileNames[key]);
        displayedImage.setAttribute('alt', imageAltText[key]);
    });
}



/* Wiring up the Darken/Lighten button */


btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});

