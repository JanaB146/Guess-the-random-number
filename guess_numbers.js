let randomNumber, upperLimit = 100, guessedNumber;
let tries = 4;
let gameOn = true;

function startGuessNumbers() {
    // Der Computer generiert eine Zufallszahl
    randomNumber = Math.random() * 90 + 10;
    randomNumber = Math.ceil(randomNumber);
    // Beim Klicken auf das Fenster erscheint ein anderer Text
    document.getElementById("game-text").innerText = "Rate eine Zahl zwischen 0 und 100";
}

function checkInput() {
    if (randomNumber == null) {
        return;
    }
    while (gameOn && tries > 0) {
        document.getElementById("versuche").innerText=`Du hast noch ${tries} Versuche.`;
        guessedNumber = document.getElementById("input").value;
        document.getElementById("ueberschrift").innerText = guessedNumber;
        if (guessedNumber >= 0 && guessedNumber <= 100) {
            if (guessedNumber < randomNumber) {
                document.getElementById("game-text").innerHTML = "Die Nummer war zu klein, versuch es noch einmal.";
                tries = tries - 1;
            } else if (guessedNumber > randomNumber) {
                document.getElementById("game-text").innerHTML = "Die Nummer war zu hoch, versuch es noch einmal.";
                tries = tries - 1;
            } else {
                document.getElementById("game-text").innerHTML = "Du hast es geschafft, mega!";
                gameOn = false;
            }   
        } else {
            document.getElementById("game-text").innerText = "Bitte bleib zwischen 0 und 100.";
        }
        document.getElementById("input").value='';
    return false;
    
}
    if (guessedNumber != randomNumber) {
        document.getElementById("game-text").innerHTML = `Du hast alle Versuche verbraucht und dennoch verloren. Die Zufallsnummer war ${randomNumber}.`;
        document.getElementById("versuche").innerText= "Du hast noch 0 Versuche.";
        return false;
    }
    return false;
}