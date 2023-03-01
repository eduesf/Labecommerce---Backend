function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const parOuImpar = process.argv[2].toLowerCase();
const num = Number(process.argv[3]);

const comput = Number(getRndInteger(0, 10));
// console.log(comput);

const resultado = num + comput;

if (parOuImpar === "par" && resultado % 2 === 0) {
  console.log(
    `Você escolheu PAR e o computador escolheu IMPAR. O resultado foi ${resultado}. Você ganhou!`
  );
} else if (parOuImpar === "impar" && resultado % 2 === 0) {
  console.log(
    `Você escolheu IMPAR e o computador escolheu PAR. O resultado foi ${resultado}. Você perdeu!`
  );
} else if (parOuImpar === "par" && resultado % 2 !== 0) {
  console.log(
    `Você escolheu PAR e o computador escolheu IMPAR. O resultado foi ${resultado}. Você perdeu!`
  );
} else if (parOuImpar === "impar" && resultado % 2 !== 0) {
  console.log(
    `Você escolheu IMPAR e o computador escolheu PAR. O resultado foi ${resultado}. Você ganhou!`
  );
}
