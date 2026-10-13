const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "José Luis Brown",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdown = document.getElementById("players");

team.innerText = footballTeam.team;
year.innerText = footballTeam.year;
headCoach.innerText = footballTeam.headCoach;

const displayPlayers = (players) => {
  playerCards.innerHTML = players
    .map((player) => {
      let playerName = player.name;

      if (player.isCaptain) {
        playerName = `(Captain) ${player.name}`;
      }

      return `
        <div class="player-card">
          <h2>${playerName}</h2>
          <p>Position: ${player.position}</p>
        </div>
      `;
    })
    .join("");
};

displayPlayers(footballTeam.players);

playersDropdown.addEventListener("change", () => {
  let filteredPlayers;

  if (playersDropdown.value === "all") {
    filteredPlayers = footballTeam.players;
  } else {
    filteredPlayers = footballTeam.players.filter(
      (player) => player.position === playersDropdown.value
    );
  }

  displayPlayers(filteredPlayers);
});
