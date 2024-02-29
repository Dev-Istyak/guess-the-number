const minNumber=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNumber +1)+minNumber);

let attempt=0;
let guess;
let running=true;

while(running){
    guess=window.prompt(`GUESS A VALID NUMBER BETWEEN ${minNumber}-${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("ENTER A VALID NUMBER");
    }
    else if(guess<minNumber|| guess>maxNum){
        window.alert("ENTER A VALID NUMBER");
        }
    else{
        attempt++;
        if(guess<answer){
            window.alert("THE ANSWE IS TOO LOW.TRY AGAIN")
        }
        else if(guess>answer){
            window.alert("THE ANSWER IS TOO HIGH .TRY AGAIN");
        }
        else{
            window.alert(` CORRECT! THE ANSWER WAS ${answer}. AND IT TOOK ${attempt} ATTEMPTS`);
            running=false;
        }
    }    

    }
