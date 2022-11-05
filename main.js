function createGame(player1, hour1, player2){
  return `
  <li>
    <img src="./assets/${player1}.svg" alt="bandeira do ${player1}" />
    <strong>${hour1}</strong>
    <img src="./assets/${player2}.svg" alt="bandeira de ${player2}" />
  </li>
`
}

let delay = 0;
function createCard(date, day, games){
  delay = delay + 0.3;
  return `
   <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day} </span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard("24/11","quinta",
      createGame("switzerland", "07:00", "cameroon") +
        createGame("uruguai", "10:00", "south-korea") +
        createGame("portugal", "13:00", "gana") +
        createGame("brazil", "16:00", "serbia"))+
    createCard("28/11","segunda",
      createGame("cameroon", "07:00", "serbia") +
       createGame("south-korea", "10:00", "gana") +
        createGame("brazil", "13:00", "switzerland") +
        createGame("portugal", "16:00", "uruguai"))+
    createCard("2/12","sexta",
       createGame("south-korea", "07:00", "portugal") +
        createGame("gana", "10:00", "uruguai") +
        createGame("serbia", "13:00", "switzerland") +
       createGame("cameroon", "16:00", "brazil"))
