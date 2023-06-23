const colors = ["red", "green", "blue", "yellow", "pink", "purple", "brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    // get random number between 0 and colors length
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[getRandomNumber()];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}