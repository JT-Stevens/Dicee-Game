//Random number between 1 - 6
function getRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
}

//Responsible for changing the appearance of the dice face
function changeDieFace(num, diceFace) {
    var pipArr = diceFace.getElementsByClassName("dot");

    switch (num) {
        case 1:
            for (let i = 0; i < pipArr.length; i++) {
                if (i != 2) {
                    pipArr[i].toggleAttribute("hidden");
                }
            }
            break;
        case 2:
            for (let i = 0; i < pipArr.length; i++) {
                if (i != 0 && i != 4) {
                    pipArr[i].toggleAttribute("hidden");
                }
            }
            diceFace.getElementsByClassName("row")[0].style.justifyContent = "flex-end";
            diceFace.getElementsByClassName("row")[2].style.justifyContent = "flex-start";
            break;
        case 3:
            for (let i = 0; i < pipArr.length; i++) {
                if (i != 0 && i != 2 && i != 4) {
                    pipArr[i].toggleAttribute("hidden");
                }
            }
            diceFace.getElementsByClassName("row")[0].style.justifyContent = "flex-end";
            diceFace.getElementsByClassName("row")[2].style.justifyContent = "flex-start";
            break;
        case 4:
            for (let i = 0; i < pipArr.length; i++) {
                if (i === 2 || i === 3) {
                    pipArr[i].toggleAttribute("hidden");
                }
            }
            break;
        case 5:
            for (let i = 0; i < pipArr.length; i++) {
                if (i === 2) {
                    pipArr[i].toggleAttribute("hidden");
                }
            }
            break;
        case 6:

            break;
    }
}

//Resets the appearance.
function reset() {
    var pipArr = document.getElementsByClassName("dot");
    for (let i = 0; i < pipArr.length; i++) {
        pipArr[i].hidden = false;
    }

    var rowArr = document.getElementsByClassName("row");
    for (let i = 0; i < rowArr.length; i++){
        rowArr[i].style.justifyContent = "space-evenly";
    }
}

//Based off who wins, changes the winning border and winning text
function styleWinner() {
    document.getElementById("rolling").toggleAttribute('hidden');
    
    if (die1 === die2) {
        
        document.getElementById("Tie").toggleAttribute("hidden");
    } else if (die1 > die2) {
        document.getElementById("border").toggleAttribute('hidden');
        document.getElementById("wrapper").classList.add("player-1-won");
        document.getElementById("player-1-won").toggleAttribute("hidden");
    } else {
        document.getElementById("border").toggleAttribute('hidden');
        document.getElementById("wrapper").classList.add("player-2-won");
        document.getElementById("player-2-won").toggleAttribute("hidden");
    }
}

function rollDice() {
    reset();
    die1 = getRandomNum();
    die2 = getRandomNum();
    
    changeDieFace(die1, document.getElementById("player1"));
    changeDieFace(die2, document.getElementById("player2"));
}

let die1 = 6;
let die2 = 6;

//Roll the dice for one second. Display winner when done.
let animation = setInterval(rollDice, 80);
setTimeout(function () {
    clearInterval(animation);
    setTimeout(styleWinner(), 1010);
}, 1000);




