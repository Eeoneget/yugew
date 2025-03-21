dumpButton = document.querySelector(".dump-button__button");
const audio = document.getElementById("audio");

dumpButton.addEventListener("click", () => {
    audio.play();
});
