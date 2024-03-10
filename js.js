const random = Math.floor(Math.random() * 100) + 1;
const num = document.getElementById("number");
const phrase = document.getElementById("phrase");
const button = document.getElementById("button");

button.onclick = function() {
    let userNum = Number(num.value);
    if(userNum > random){
        phrase.textContent = "Votre nombre est trop élevé.";
    }
    else if (userNum < random) {
        phrase.textContent = "Votre nombre est trop bas.";
    }
    else if (userNum == random ) {
        phrase.textContent = "BINGO, vous avez trouvé!";
    }
}
