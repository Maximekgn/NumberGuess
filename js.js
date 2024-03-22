const random = Math.floor(Math.random() * 100 + 1 ) 
const phrase = document.getElementById("phrase");
const button = document.getElementById("button");


let attemps = 0 ;
let running = true ;

 
    button.onclick = function() {
        var user_number = document.getElementById("number").value;
        user_number = Number(user_number);
        if (isNaN(user_number))
        {
            phrase.textContent = "PLEASE ENTER A CORRECT NUMBER";
        }
        else if (user_number<0 || user_number>100 )
        {
            phrase.textContent = " PLEASE ENTER A NUMBER BEETWEEN 0-100" ;
        }
        else 
        {   
            if(user_number > random){
                phrase.textContent = "Your number is too high";
            }
            else if (user_number < random) {
                phrase.textContent = "Your Number is too low ";
            }
            else if (user_number == random ) {
                phrase.textContent = `BINGO, you win! the number was ${random} ; it took you ${attemps+1} attemps nigga !`;
            }
            attemps ++ ;
        }
       
    }