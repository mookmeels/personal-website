/*
function toggleSidebar() {
  const sidebars = document.getElementsByClassName("sidebar");
  const bigboyContainer = document.querySelector(".main-container");
  /*let isHidden = sidebars[0].style.display === "none";

  for (let i = 0; i < sidebars.length; i++) {
    if (sidebars[i]) {
      sidebars[i].style.display = isHidden ? "flex" : "none";
    }
  }
  if (isHidden) {
    bigboyContainer.style.margin = "0";
    bigboyContainer.style.setProperty = ("max-width", "100%", "important"); //I AM GOING TO GO FERAL
  } else {
    bigboyContainer.style.margin = "0 auto";
    bigboyContainer.style.paddingTop = "10px";
    bigboyContainer.style.maxWidth = "1080px";
  }
  element.classList.toggle(bigboyContainer);
}
*/

let timer; // store the interval
let seconds = 0;
document.getElementById("high-score").innerText = highScore;
let highScore = localStorage.getItem("cryHighScore") || 0; // store longest breakdown
const cryingDiv = document.getElementById("crying-container");
function startCrying() {
  cryingDiv.innerHTML = `
    <div class="container d-flex align-items-center justify-content-center text-center">
      <div>
        <h1 class="display-1 text-primary fw-bold">😩😭😭😭</h1>
        <h2 class="fw-light text-muted">you're now fully committed to crying...</h2>
        <p class="text-secondary">duration: <span id="timer">0 seconds</span></p>
        <p class="text-danger">longest breakdown: <span id="high-score">${highScore}</span> seconds</p>
        <button class="btn btn-danger btn-lg mt-3" onclick="cancelCrying()">big girls don't cry!</button>
      </div>
    </div>`;
    
    // if timer already exists, clear it first (prevents multiple intervals)
    if (timer) clearInterval(timer);

    // start counting the seconds of emotional devastation
    timer = setInterval(() => {
      document.getElementById("timer").innerText = `${++seconds} seconds`;
    }, 1000);

    window.cancelCrying = function() {
      clearInterval(timer);
      if (seconds > highScore) {
        highScore = seconds; // update high score
        localStorage.setItem("cryHighScore", highScore); // save to browser storage
      }
      seconds = 0; // RESET TIMER bc we're ✨emotionally stable✨ now 😭💀
      cryingDiv.innerHTML = `
        <h1 class="display-1 text-success fw-bold">✨🙂✨</h1>
        <h2 class="fw-light text-muted">everything's okay!! NOTHING IS WRONG QUEEN NEVER CRY</h2>
        <p class="text-danger">longest breakdown: <span id="high-score">${highScore}</span> seconds</p>
        <button class="btn btn-primary btn-lg mt-3" onclick="startCrying()">start another breakdown</button>
      `;
    }
}