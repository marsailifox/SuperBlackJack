document.getElementById("play").addEventListener("click", function() {
  if (document.querySelector('h2').innerText === "HIT" ||       
  document.querySelector('h2').innerText === "STAY") {
  document.querySelector('h2').innerText = "You'll definitely win this time!"
} else {
  document.querySelector('h2').innerText = "Alright, Hoss...",   
  document.querySelector('h3').remove()}
})

document.getElementById("hitBtn").addEventListener("click", function() {
  if (document.querySelector('h2').innerText === "Howdy Partner! Feelin' Lucky?") {
    document.querySelector('h2').innerText = "Slow down, Hoss, press the PLAY button!"}
  else if (document.querySelector('h2').innerText != "Slow down, Hoss, press the PLAY button!") {
    document.querySelector('h2').innerText = "HIT"}
})

document.getElementById("stayBtn").addEventListener("click", function() {
    if (document.querySelector('h2').innerText === "Howdy Partner! Feelin' Lucky?") {
    document.querySelector('h2').innerText = "Slow down, Hoss, press the PLAY button!"}
  else if (document.querySelector('h2').innerText != "Slow down, Hoss, press the PLAY button!") {
    document.querySelector('h2').innerText = "STAY"}
})
