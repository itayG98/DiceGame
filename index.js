var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".winner").innerText = "Player one won!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".winner").innerText = "Player two won!";
}
else {
    document.querySelector(".winner").innerText = "Its a tie!";
}
switch (randomNumber1) {
    case 1:
        document.querySelector(".dice1").setAttribute("src", "images/dice1.png")
        document.querySelector(".dice1").alt = ("one")
        break;
    case 2:
        document.querySelector(".dice1").setAttribute("src", "images/dice2.png")
        document.querySelector(".dice1").alt = ("two")
        break;
    case 3:
        document.querySelector(".dice1").setAttribute("src", "images/dice3.png")
        document.querySelector(".dice1").alt = ("three")
        break;
    case 4:
        document.querySelector(".dice1").setAttribute("src", "images/dice4.png")
        document.querySelector(".dice1").alt = ("four")
        break;
    case 5:
        document.querySelector(".dice1").setAttribute("src", "images/dice5.png")
        document.querySelector(".dice1").alt = ("five")
        break;
    case 6:
        break;

    default:
        alert("error");
        break;
}
switch (randomNumber2) {
    case 1:
        document.querySelector(".dice2").setAttribute("src", "images/dice1.png")
        document.querySelector(".dice2").alt = ("one")
        break;
    case 2:
        document.querySelector(".dice2").setAttribute("src", "images/dice2.png")
        document.querySelector(".dice2").alt = ("two")
        break;
    case 3:
        document.querySelector(".dice2").setAttribute("src", "images/dice3.png")
        document.querySelector(".dice2").alt = ("three")
        break;
    case 4:
        document.querySelector(".dice2").setAttribute("src", "images/dice4.png")
        document.querySelector(".dice2").alt = ("four")
        break;
    case 5:
        document.querySelector(".dice2").setAttribute("src", "images/dice5.png")
        document.querySelector(".dice2").alt = ("five")
        break;
    case 6:
        break;

    default:
        alert("error");
        break;
}
