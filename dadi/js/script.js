const computerNumber = parseInt(Math.floor(Math.random() * 6) + 1);
const userNumber = parseInt(Math.floor(Math.random() * 6) + 1);

console.log(computerNumber, userNumber);

let result = "";
if (computerNumber > userNumber) {
    result = "Mi spiace hai perso... prova ancora";
} else if (computerNumber === userNumber) {
    result = "E' uscito pari...prova ancora"
} else {
    result = "Congratulazioni hai vinto!!!"
}

console.log(result);
document.getElementById("user-number").innerHTML = userNumber;
document.getElementById("computer-number").innerHTML = computerNumber;
document.getElementById("final-result").innerHTML = result;