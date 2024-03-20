const random = Math.floor(Math.random() * 100) + 1;
const num = document.getElementById("number");
const phrase = document.getElementById("phrase");
const button = document.getElementById("button");

button.onclick = function() {
    let userNum = Number(num.value);
    if(userNum > random){
        phrase.textContent = "Your number is too high";
    }
    else if (userNum < random) {
        phrase.textContent = "Your Number is too low ";
    }
    else if (userNum == random ) {
        phrase.textContent = `BINGO, you win! the number was ${random}`;
    }
}
