let targetNumber, attempts, maxAttempts = 10;
let totalRounds = 0;
let totalAttempts = 0;

function startNewGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = '';
  document.getElementById("guessInput").value = '';
  document.getElementById("score").textContent = '';
  console.log("Target (for testing):", targetNumber); // Optional for debugging
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("message").textContent = "Please enter a valid number (1-100).";
    return;
  }

  attempts++;

  if (guess < targetNumber) {
    document.getElementById("message").textContent = `Attempt ${attempts}/${maxAttempts}: Too low! Try again.`;
  } else if (guess > targetNumber) {
    document.getElementById("message").textContent = `Attempt ${attempts}/${maxAttempts}: Too high! Try again.`;
  } else {
    totalRounds++;
    totalAttempts += attempts;
    document.getElementById("message").textContent =
      `🎉 Correct! You guessed it in ${attempts} attempts.`;
    document.getElementById("score").textContent =
      `Rounds: ${totalRounds}, Total Attempts: ${totalAttempts}, Average: ${(totalAttempts / totalRounds).toFixed(2)}`;
    return;
  }

  if (attempts >= maxAttempts) {
    document.getElementById("message").textContent =
      `❌ You've used all ${maxAttempts} attempts. The number was ${targetNumber}.`;
  }
}

// Auto-start game
startNewGame();
