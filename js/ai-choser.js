import { hands } from "./hands.js";

export function aiChoser(mode, humanHand) {
  if (mode === "easy") {
    const randomIndex = Math.trunc(Math.random() * hands.length);
    return hands[randomIndex];
  } else if (mode == "hard") {
  } else {
    console.error("Bunday holat mavjut emas.");
  }
}
