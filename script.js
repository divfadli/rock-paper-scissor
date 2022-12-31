function play(playerSelection) {
    const computerSelection = Math.floor(Math.random() * 3); // pick 0 - 2 randomly

    if(playerSelection === computerSelection) {
        draw();
    } else if((playerSelection + 1)%3 == computerSelection) {
        score("Computer");
    } else {
        score("Player");
    }

    moves(playerSelection, computerSelection);
}

function moves(playerSelection, computerSelection) {
    const possibility = ["rock", "paper", "scissor"];
    const container = $("#moves");
    container.empty();

    const players = possibility[playerSelection];
    const computers = possibility[computerSelection];

    // print last moves
    container.innerHTML = "";
    container.append(players.toUpperCase());
    container.append(" VS ");
    container.append(computers.toUpperCase());
}

function score(participant) {
    let score =+ document.getElementById(participant).innerHTML;
    document.getElementById(participant).innerHTML = score + 1;
    win(participant)
}

function draw() { console.log("draw") }

function win(participant) {
    const round = 3

    if(document.getElementById(participant).innerHTML >= round) {
        const text = $(document.createElement('h1'));
        const champion = participant.toUpperCase();

        $(".game_result").toggleClass("show-result");

        // show winner
        text.append(champion);
        $("#winner").append(text);

        $(".btn-restart").click(function () {
            restart();
          });
    }
}

function restart() {
    // Reset Game
    $(".game_result").toggleClass("show-result");
    $("#Computer").text(0);
    $("#Player").text(0);
    $("#moves").text("");
    $("#winner").text("");
    $(".game_result").restart();
}
