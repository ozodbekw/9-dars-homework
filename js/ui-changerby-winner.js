import { aiHand, score, status, statusTitle } from "./html-selection.js";

export function uiChangerByWinner(state) {
  if (state === "tie") {
    status.style.opacity = "1";
    statusTitle.textContent = "Tie";
  } else if (state === "user") {
    status.style.opacity = "1";
    statusTitle.textContent = "You Win";
    aiHand.classList.add("win-shadow");
    score.innerText = +score.innerText + 1;
  } else if (state === "ai") {
    status.style.opacity = "1";
    statusTitle.textContent = "You Lose";
    aiHand.classList.add("win-shadow");
    if (+score.innerText > 0) {
      score.innerText = +score.innerText - 1;
    }
  }
}
