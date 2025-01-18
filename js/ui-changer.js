import { gameResult, gameZone } from "./html-selection.js";

export function uiChanger(type) {
  if (type === "gameZone") {
    gameZone.style.display = "none";
    gameResult.style.display = "block";
  } else if (type === "gameResult") {
    gameZone.style.display = "block";
    gameResult.style.display = "none";
  } else {
    console.log("Bunday tur mavjud emas!");
  }
}
