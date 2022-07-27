const contensButton = document.querySelector(".button_contens");
const contensPopup = document.querySelector(".popup-contens");
const closeContensPopup = document.querySelector(
  ".popup-contens__close-button"
);
const closeInfPopup = document.querySelector(".popup-inf__close-button");
const infPopup = document.querySelector(".popup-inf");
const audio = document.querySelector("#audio");
const player = document.querySelector(".player");

contensButton.addEventListener("click", () => {
  contensPopup.classList.add("popup-inf_opened");
  infPopup.classList.remove("popup-inf_opened");
});

function closePopup(popup) {
  popup.classList.remove("popup-inf_opened");
}

closeContensPopup.addEventListener("click", () => {
  closePopup(contensPopup);
  infPopup.classList.add("popup-inf_opened");
});

closeInfPopup.addEventListener("click", () => {
  closePopup(infPopup);
});

function actionPLayer(element) {
  if(element.classList.contains('player__button-stop')) {
    element.classList.remove('player__button-stop');
    audio.pause();
    return;
  }
  element.classList.add('player__button-stop');
  audio.play();
}

player.addEventListener("click", (event) => {
  const targetElement = event.target;
  targetElement.classList.contains('player__button-play') ? actionPLayer(targetElement) : false;
});
