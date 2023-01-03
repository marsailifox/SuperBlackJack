const h2 = document.querySelector('h2')
const playerTotal = document.getElementById('playerTotal')
const dealerTotal = document.getElementById('dealerTotal')

const cards = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10]

const dealerMove = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

document.getElementById("play").addEventListener("click", function() {
  if (parseInt(playerTotal.innerText) > 1) {
  h2.innerText = "AGAIN!", playerTotal.innerText = 0, dealerTotal.innerText = 0
} else {
  h2.innerText = "Alright, boss...",   
  document.querySelector('h3').remove(), playerTotal.innerText = cards[cards.length * Math.random() | 0], dealerTotal.innerText = cards[cards.length * Math.random() | 0]}
})

document.getElementById("hitBtn").addEventListener("click", function() {
  if (h2.innerText === "Howdy Partner! Feelin' Lucky?") {
    h2.innerText = "Slow down, boss, press the PLAY button!"}
  else if (h2.innerText != "Slow down, boss, press the PLAY button!" && h2.innerText != "DEALER BUST! YOU WIN!" && h2.innerText != "YOU WIN!" && parseInt(playerTotal.innerText) < 21 && h2.innerText != "HOUSE WINS! YOU LOSE!") {
    h2.innerText = "HIT", playerTotal.innerText = parseInt(playerTotal.innerText) + cards[cards.length * Math.random() | 0]} 
  if (parseInt(playerTotal.innerText) === 21) {h2.innerText = "WOW! BLACKJACK! YOU WIN!"}
  else if (playerTotal.innerText > 21) {h2.innerText = "BUSTED!"}
})

document.getElementById("standBtn").addEventListener("click", function() {
  if (h2.innerText === "Howdy Partner! Feelin' Lucky?") {
    h2.innerText = "Slow down, boss, press the PLAY button!"}
  if (h2.innerText != "Slow down, boss, press the PLAY button!" && h2.innerText != "BUSTED!" && h2.innerText != "HOUSE WINS! YOU LOSE!" && parseInt(dealerTotal.innerText) < 22 && parseInt(playerTotal.innerText) != 21 && parseInt(playerTotal.innerText) > 0)
   {dealerTotal.innerText = dealerMove[dealerMove.length * Math.random() | 0]}
  if (parseInt(dealerTotal.innerText) > 21) {
    h2.innerText = "DEALER BUST! YOU WIN!"
  }
  if (parseInt(dealerTotal.innerText) < parseInt(playerTotal.innerText) &&  parseInt(dealerTotal.innerText) > 0 && parseInt(playerTotal.innerText) < 21) {
    h2.innerText = "YOU WIN!"
  }
  if (parseInt(dealerTotal.innerText) > parseInt(playerTotal.innerText) && parseInt(dealerTotal.innerText) < 22) {
    h2.innerText = "HOUSE WINS! YOU LOSE!"
  }
  if (dealerTotal.innerText === playerTotal.innerText && parseInt(playerTotal.innerText) > 0) {h2.innerText = "TIE! WOW!"}
})
