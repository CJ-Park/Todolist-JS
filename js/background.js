const body = document.querySelector("body");

const images = [
    "2.jpg", "3.jpg", "4.jpg", "6.jpg", "7.jpg", "5.png"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];
let backImage = new Image();
backImage = `url(../Todolist-JS/img/${chosenImage})`;
body.style.backgroundImage = backImage;