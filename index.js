let min = 1;
let max = 5;
let generatedNum = Math.floor(Math.random() * max + min)
let textContent1 = document.getElementById("textContent1");
let attempt = 0;
let guess;
let running = true

while(running){
    guess = window.prompt("Guess a number from 1 to 5");
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a valid number")
    }else if(guess < min || guess > max){
           window.alert("Enter a valid number")
    } else {
        attempt++
        if (guess < generatedNum) {
            window.alert("TRY AGAIN!, TOO LOW")
        }else if(guess > generatedNum) {
            window.alert("TRY AGAIN!, TOO HIGH")
        } else {
           textContent1.textContent =  `Correct! The answer was ${generatedNum} it took ${attempt} attempts`;
            running = false
        }
    }
}

