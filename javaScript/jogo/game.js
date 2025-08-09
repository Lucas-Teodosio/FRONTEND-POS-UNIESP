import readlineSync from "readline-sync"; // Para receber input no console
import { generateRandomNumber } from "./randomNumber.js";
import { checkGuess } from "./checkGuess.js";

export function startGame() {
  const maxAttempts = 5;
  const min = 1;
  const max = 100;
  const secretNumber = generateRandomNumber(min, max);

  console.log("Bem-vindo ao Jogo de Adivinhação!");
  console.log(`Tente adivinhar o número entre ${min} e ${max}.`);
  console.log(`Você tem ${maxAttempts} tentativas.\n`);

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const input = readlineSync.questionInt(
      `Tentativa ${attempt}: Digite seu palpite: `
    );

    const result = checkGuess(input, secretNumber);
    console.log(result);

    if (input === secretNumber) {
      console.log(`Você acertou em ${attempt} tentativa(s)!`);
      return;
    }

    if (attempt === maxAttempts) {
      console.log(`Suas tentativas acabaram. O número era ${secretNumber}.`);
    }
  }
}
