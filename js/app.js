import { aiChoser } from "./ai-choser.js";
import {
  hands,
  refreshGame,
  humanHand,
  aiHand,
  status,
  modal,
  overlay,
  closeModalBtn,
  openModalBtn,
} from "./html-selection.js";
import { closeModal, openModal } from "./modal.js";
import { initialState } from "./settings.js";
import { uiChanger } from "./ui-changer.js";

// Hands Linstener
hands.forEach((hand) => {
  hand.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const chosenHand = hand.querySelector(".game-zone__img");
    if (chosenHand) {
      humanHand.src = chosenHand.src;
    }
    const chosenHandAi = aiChoser(initialState.mode);

    setTimeout(() => {
      aiHand.src = `img/${chosenHandAi}.svg`;
      status.style.opacity = "1";
    }, 1000);

    uiChanger("gameZone");
  });
});

// Refresh game
refreshGame.addEventListener("click", function () {
  uiChanger("gameResult");
  aiHand.src = "img/oval.svg";
});

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
});
