let scorePlayer1 = document.querySelector("#scorePlayer1")
let scorePlayer2 = document.querySelector("#scorePlayer2")
const playMax = document.querySelector("#playMax")

const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const reset = document.querySelector("#reset")


player1.addEventListener('click', function (e) {
    if (parseInt(scorePlayer1.innerText) < playMax.value && parseInt(scorePlayer2.innerText) < playMax.value) {
        scorePlayer1.innerText = add1(scorePlayer1.innerText)
    }
    colorize()
})


player2.addEventListener('click', function (e) {
    if (parseInt(scorePlayer1.innerText) < playMax.value && parseInt(scorePlayer2.innerText) < playMax.value) {
        scorePlayer2.innerText = add1(scorePlayer2.innerText);
    }
    colorize()
})

playMax.addEventListener('click', function (e) {
    resetScores()
})

reset.addEventListener('click', resetScores)

/*
const returnTF = () => {
    if(scorePlayer1.innerText === )
}
*/

function add1(num) {
    let newNum = parseInt(num)
    newNum += 1;
    return newNum;
}

function colorize() {
    if (parseInt(scorePlayer1.innerText) > parseInt(scorePlayer2.innerText)) {
        scorePlayer1.style.color = "green";
        scorePlayer2.style.color = "red";
    } else if (parseInt(scorePlayer1.innerText) < parseInt(scorePlayer2.innerText)) {
        scorePlayer1.style.color = "red";
        scorePlayer2.style.color = "green";
    } else {
        scorePlayer1.style.color = "black";
        scorePlayer2.style.color = "black";

    }
}

function resetScores() {
    scorePlayer1.innerText = 0
    scorePlayer2.innerText = 0
    colorize();
}