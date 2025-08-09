export function checkGuess(userGuess, secretNumber) {
  if (userGuess > secretNumber) {
    return "Seu número é MAIOR do que o número secreto.";
  } else if (userGuess < secretNumber) {
    return "Seu número é MENOR do que o número secreto.";
  } else {
    return "Parabéns! Você acertou o número!";
  }
}
