const gameZone = document.querySelector("#gameZone");
const gameResult = document.querySelector("#gameResult");
const hands = document.querySelectorAll(".js-hand");
const humanHand = document.querySelector("#humanHand");
const aiHand = document.querySelector("#aiHand");
const refreshGame = document.querySelector("#refreshGame");
const status = document.querySelector("#status");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");
const openModalBtn = document.querySelector("#openModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");

export {
  gameResult,
  gameZone,
  hands,
  refreshGame,
  humanHand,
  aiHand,
  status,
  modal,
  overlay,
  openModalBtn,
  closeModalBtn,
};
