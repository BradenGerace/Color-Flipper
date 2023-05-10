const colors = ["red", "green", "blue", "yellow", "pink", "purple", "brown", "rgba(212,47,142)", "#e6f8a3"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

if (btn) {
    btn.addEventListener('click', function(){
        console.log(document.body);
    })
}

// function randomNumberGenerator() {
//     return Math.floor(Math.random()) 
// }