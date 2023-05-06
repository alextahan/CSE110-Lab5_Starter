// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti()

function init() {
  let hornSelect = document.getElementById("horn-select");
  hornSelect.addEventListener('input', changeHorn);

  let volumeSlider = document.getElementById("volume-controls");
  volumeSlider.addEventListener('change', changeVolume);

  let button = document.querySelector('button');
  button.addEventListener('click', function() {
    document.querySelector("audio").play();
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}

function changeHorn(e) {
  let audio = document.querySelector("audio");
  let hornImage = document.querySelector("header + img");

  audio.src = `assets/audio/${e.target.value}.mp3`;
  hornImage.src = `assets/images/${e.target.value}.svg`;
}

function changeVolume(e) {
  let vol = e.target.value;
  let volImage = document.querySelector("#volume + img");
  let audio = document.querySelector("audio");
  
  if (vol == 0) {
    volImage.src = "assets/icons/volume-level-0.svg";
  } else if (vol < 33) {
    volImage.src = "assets/icons/volume-level-1.svg";
  } else if (vol < 67) {
    volImage.src = "assets/icons/volume-level-2.svg";
  } else {
    volImage.src = "assets/icons/volume-level-3.svg";
  }

  audio.volume = vol/100;

}