let targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function submitGuess() {
    const guess = Number(document.getElementById("guess").value);
    attempts++;

    if (guess === targetNumber) {
        document.getElementById("message").innerText = `Selamat! Anda menebak benar dalam ${attempts} kali percobaan.`;
        // Kirim skor ke leaderboard
        sendScore(attempts);
        resetGame();
    } else if (guess < targetNumber) {
        document.getElementById("message").innerText = "Tebakan Anda terlalu rendah!";
    } else {
        document.getElementById("message").innerText = "Tebakan Anda terlalu tinggi!";
    }
}

function resetGame() {
    targetNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("guess").value = '';
}

function sendScore(score) {
    fetch('http://localhost:3000/leaderboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ score: score })
    });
}
