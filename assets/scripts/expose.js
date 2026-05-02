window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById('horn-select');
    const mainImage = document.querySelector("img[alt='No image selected']"); 
    const audio = document.querySelector('audio');
    const volumeSlider = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');
    const playButton = document.querySelector('button');

    const jsConfetti = new JSConfetti();

    hornSelect.addEventListener('change', (event) => {
        const selectedHorn = event.target.value;

        if (selectedHorn === 'air-horn') {
            mainImage.src = 'assets/images/air-horn.svg';
            audio.src = 'assets/audio/air-horn.mp3';
        } else if (selectedHorn === 'car-horn') {
            mainImage.src = 'assets/images/car-horn.svg';
            audio.src = 'assets/audio/car-horn.mp3';
        } else if (selectedHorn === 'party-horn') {
            mainImage.src = 'assets/images/party-horn.svg';
            audio.src = 'assets/audio/party-horn.mp3';
        }
    });

    volumeSlider.addEventListener('input', (event) => {
        const volumeValue = parseInt(event.target.value);

        audio.volume = volumeValue / 100;

        if (volumeValue === 0) {
            volumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (volumeValue >= 1 && volumeValue < 33) {
            volumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (volumeValue >= 33 && volumeValue < 67) {
            volumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else if (volumeValue >= 67) {
            volumeIcon.src = 'assets/icons/volume-level-3.svg';
        }
    });

    playButton.addEventListener('click', (event) => {
        audio.play();

        if (hornSelect.value === 'party-horn') {
            jsConfetti.addConfetti();
        }
    });
}