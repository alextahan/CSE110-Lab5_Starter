// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector('button');
  const inputText = document.getElementById('text-to-speak');
  const smile = document.querySelector('img');

  let voices = [];

  //load voices
  setTimeout(loadVoices, 50);
  
  function loadVoices() {
    voices = synth.getVoices();

    //populate dropdown
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = voices[i].name;

      voiceSelect.appendChild(option);
    }
  }

  talkButton.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(inputText.value);
    const selectedOption = voiceSelect.value;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
  });

  setInterval(() => {
    if (synth.speaking) {
      smile.src = "assets/images/smiling-open.png";
    } else {
      smile.src = "assets/images/smiling.png";
    }
  }, 50);
}