


function multiply() {
    window.location = "gamePage.html";
    var player1name = document.getElementById("Player1name").value;
    var player2name = document.getElementById("Player2name").value;

    localStorage.setItem("player 1 name", player1name);
    localStorage.setItem("player 2 name", player2name);
}
