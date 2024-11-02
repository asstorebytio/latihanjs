function fetchLeaderboard() {
    fetch('https://latihanjs.vercel.app/webdatabase/leaderboard')
        .then(response => response.json())
        .then(data => {
            const leaderboardList = document.getElementById("leaderboardList");
            leaderboardList.innerHTML = '';
            data.forEach((entry, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = `Peringkat ${index + 1}: Skor ${entry.score}`;
                leaderboardList.appendChild(listItem);
            });
        });
}

fetchLeaderboard();
