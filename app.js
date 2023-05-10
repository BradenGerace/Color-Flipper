const colors = ["red", "green", "blue", "yellow", "pink", "purple", "brown", "rgba(212,47,142)", "#e6f8a3"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0 and colors length
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}