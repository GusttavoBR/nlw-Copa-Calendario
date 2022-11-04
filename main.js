function createGame(p1, hour, p2) {
  return `
  <li>
    <img src="./assets/icon-${p1}.svg" alt="Bandeira do ${p1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${p2}.svg" alt="Bandeira da ${p2}">
  </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay  + 0.3;
  return `
    <div class="card" style="aniamtion-delay:${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}  
        </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML = 
          createCard('24/11', 'quinta', 
            createGame('brazil', '16:00', 'serbia')+
          createGame('brazil', '16:00', 'serbia') +
          createGame('brazil', '16:00', 'serbia'))+
          
          createCard('28/11', 'segunda', 
          createGame('southKorea', '10:00', 'gana') +
          createGame('brazil',     '13:00', 'switzerland') +
          createGame('portugal',   '16:00', 'uruguay')) +
          
          createCard('02/12', 'sexta', 
          createGame('brazil', '16:00', 'cameroon') +
          createGame('brazil', '16:00', 'cameroon') +
          createGame('brazil', '16:00', 'cameroon'))
