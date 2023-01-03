const h2 = document.querySelector('h2')
const playerTotal = document.getElementById('playerTotal')
const dealerTotal = document.getElementById('dealerTotal')

const cards = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10]

document.getElementById("play").addEventListener("click", function() {
  if (parseInt(playerTotal.innerText) > 1) {
  h2.innerText = "You'll definitely win this time!", playerTotal.innerText = 0, dealerTotal.innerText = 0
} else {
  h2.innerText = "Alright, boss...",   
  document.querySelector('h3').remove(), playerTotal.innerText = cards[cards.length * Math.random() | 0],      dealerTotal.innerText = cards[cards.length * Math.random() | 0]}
})

document.getElementById("hitBtn").addEventListener("click", function() {
  if (h2.innerText === "Howdy Partner! Feelin' Lucky?") {
    h2.innerText = "Slow down, boss, press the PLAY button!"}
  else if (h2.innerText != "Slow down, boss, press the PLAY button!" && parseInt(playerTotal.innerText) < 21 && h2.innerText != "STAY") {
    h2.innerText = "HIT", playerTotal.innerText = parseInt(playerTotal.innerText) + cards[cards.length * Math.random() | 0]} if (playerTotal.innerText > 21) {h2.innerText = "BUSTED!"}
  if (parseInt(playerTotal.innerText) === 21) {h2.innerText = " WOW! BLACKJACK!"}
})

document.getElementById("stayBtn").addEventListener("click", function() {
  if (h2.innerText === "Howdy Partner! Feelin' Lucky?") {
  h2.innerText = "Slow down, boss, press the PLAY button!"}
else if (h2.innerText != "Slow down, boss, press the PLAY button!") {
  h2.innerText = "STAY", dealerTotal.innerText = parseInt(dealerTotal.innerText) + cards[cards.length * Math.random() | 0]}
})
