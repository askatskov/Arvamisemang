// Hetkel veel input-välja funktsionaalsus ei ole lisatud
// See fail jääb ootama loogika lisamist

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');

guessBtn.addEventListener('click', () => {
    const guessValue = guessInput.value;
    feedback.textContent = `Sa sisestasid numbri: ${guessValue}`;
});
