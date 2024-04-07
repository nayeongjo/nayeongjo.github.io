const images = ["astronomy", "fantasy", "flowers", "forest", "ocean"];

const choseIdx = Math.floor(Math.random() * images.length);
const choseImg = `url(/asset/${images[choseIdx]}.jpg) no-repeat`;

document.body.style.background = choseImg;
document.body.style.backgroundSize = "cover";
