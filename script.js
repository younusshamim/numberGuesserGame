
// let min = prompt('Write the min number:');
// let max = prompt('Write the max number:');

let min = 1;
let max = 10;
let randomNum = Math.floor(Math.random() * (max - min + 1) ) + min;

for(let i=1; i<=3; i++){
    let guessNum = prompt(`Guess a number between (${min}-${max}):`);

    if(randomNum > guessNum){
        alert('Correct answer is greater!');

        if(i==3){
            alert("You Lose!");
        }
    }
    else if(randomNum < guessNum){
        alert('Correct answer is smaller!');

        if(i==3){
            alert("You Lose!");
        }
    }
    else if(randomNum == guessNum){
        alert('You Win');
        break;
    }
    else{
        alert('Invalid Input');
    }
}
