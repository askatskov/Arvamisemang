const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const feedback = document.getElementById('feedback');
const attemptsCount = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let hasWon = false;
let attempts = 0;

guessBtn.addEventListener('click', () => {
    if (hasWon) return;

    const guessValue = parseInt(guessInput.value);

    if (isNaN(guessValue)) {
        feedback.textContent = "❗ Palun sisesta korrektne number.";
        return;
    }

    if (guessValue < 1 || guessValue > 100) {
        feedback.textContent = "❗ Number peab olema vahemikus 1 kuni 100.";
        return;
    }

    attempts++;
    attemptsCount.textContent = `Katsed: ${attempts}`;

    if (guessValue === secretNumber) {
        feedback.textContent = `🎉 Õige! Sa võitsid ${attempts}. katsega!`;
        hasWon = true;
        guessBtn.disabled = true;
        guessInput.disabled = true;
        resetBtn.style.display = 'inline-block';
    } else if (guessValue < secretNumber) {
        feedback.textContent = "📉 Liiga väike!";
    } else {
        feedback.textContent = "📈 Liiga suur!";
    }
});

resetBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    hasWon = false;
    attempts = 0;
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    feedback.textContent = '';
    attemptsCount.textContent = 'Katsed: 0';
    resetBtn.style.display = 'none';
});
