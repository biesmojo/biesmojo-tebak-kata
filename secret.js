// Pengecek Kata Rahasia Sederhana - Node.js
// Jalankan: node secret.js

const readline = require("readline");

// Kata rahasia
const kataRahasia = "kucing";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Tebak kata rahasia: ", (input) => {
  const tebakan = input.trim().toLowerCase();

  if (tebakan === kataRahasia) {
    console.log(`Selamat! Kamu menebak dengan benar. Kata rahasianya adalah '${kataRahasia}'.`);
  } else {
    console.log(`Maaf, tebakanmu salah. Kata rahasianya adalah '${kataRahasia}'.`);
  }

  rl.close();
});
