import { modal, overlay } from "./html-selection.js";

function openModal() {
    overlay.style.display = "block";
  modal.style.display = "flex";
}
function closeModal() {
    overlay.style.display = "none";
  modal.style.display = "none";
}
export { openModal, closeModal };
