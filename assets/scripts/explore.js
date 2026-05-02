// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const synth = window.speechSynthesis;
    const voiceSelect = document.getElementById('voice-select');
    const talkButton = document.querySelector('button');
    const textArea = document.getElementById('text-to-speak');
    const faceImage = document.querySelector('img');

    let voices = [];

    function populateVoiceList() {
        voices = synth.getVoices();
        
        for (let i = 0; i < voices.length; i++) {
            const option = document.createElement('option');
            option.textContent = `${voices[i].name} (${voices[i].lang})`;
            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            voiceSelect.appendChild(option);
        }
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    talkButton.addEventListener('click', (event) => {
        event.preventDefault();

        const text = textArea.value;
        const utterThis = new SpeechSynthesisUtterance(text);

        const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
                break;
            }
        }

        utterThis.addEventListener('start', () => {
            faceImage.src = 'assets/images/open.png'; 
        });

        utterThis.addEventListener('end', () => {
            faceImage.src = 'assets/images/smiling.png';
        });

        synth.speak(utterThis);
    });
}