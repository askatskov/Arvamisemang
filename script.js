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
