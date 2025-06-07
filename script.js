const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let hasWon = false;

guessBtn.addEventListener('click', () => {
    if (hasWon) return;

    const guessValue = parseInt(guessInput.value);

    if (isNaN(guessValue)) {
        feedback.textContent = "❗ Palun sisesta korrektne number.";
        return;
    }

    if (guessValue === secretNumber) {
        feedback.textContent = "🎉 Õige! Sa võitsid!";
        hasWon = true;
        guessBtn.disabled = true;
        guessInput.disabled = true;
    } else if (guessValue < secretNumber) {
        feedback.textContent = "📉 Liiga väike!";
    } else {
        feedback.textContent = "📈 Liiga suur!";
    }
});
