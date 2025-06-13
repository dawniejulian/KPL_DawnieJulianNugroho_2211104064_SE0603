// main.js

/**
 * @file Main script to demonstrate the usage of the aljabarLibraries module.
 * This script showcases examples for calculating quadratic roots and polynomial expansion.
 */

// Import functions from aljabarLibraries.
// Naming convention for imported functions (camelCase) matches the exported ones.
const { hitungAkarPersamaanKuadrat, hitungHasilKuadrat } = require('./aljabarLibraries');

// --- Example: Calculating Roots of a Quadratic Equation ---
// Equation: 1x^2 - 3x - 10 = 0
const koefisienKuadratUtama = [1, -3, -10];
const akarAkarPersamaan = hitungAkarPersamaanKuadrat(koefisienKuadratUtama);

console.log(`Akar-akar persamaan kuadrat ${koefisienKuadratUtama[0]}x^2 + (${koefisienKuadratUtama[1]})x + (${koefisienKuadratUtama[2]}) = 0 adalah:`);
if (akarAkarPersamaan.length === 0) {
    console.log("Tidak ada akar real atau input tidak valid (misal, a=0).");
} else if (akarAkarPersamaan.length === 1 || akarAkarPersamaan[0] === akarAkarPersamaan[1]) {
    // Handles cases with one distinct root (discriminant is zero)
    console.log(`Akar kembar: x = ${akarAkarPersamaan[0]}`);
} else {
    console.log(`x1 = ${akarAkarPersamaan[0]}, x2 = ${akarAkarPersamaan[1]}`);
}
console.log("----------------------------------------------------");

// --- Example: Expanding a Squared Binomial ---
// Expression: (2x - 3)^2 which is (2x + (-3))^2
const termBinomialKuadrat = [2, -3]; // Represents p=2, q=-3 in (px + q)^2
const hasilEkspansiKuadrat = hitungHasilKuadrat(termBinomialKuadrat);

console.log(`Hasil ekspansi dari (${termBinomialKuadrat[0]}x + (${termBinomialKuadrat[1]}))^2 adalah:`);
console.log(`${hasilEkspansiKuadrat[0]}x^2 + (${hasilEkspansiKuadrat[1]})x + (${hasilEkspansiKuadrat[2]})`);
console.log("----------------------------------------------------");

// --- Additional Example: Quadratic Equation with Double Root ---
// Equation: x^2 - 6x + 9 = 0 (roots: x=3)
const koefisienAkarKembar = [1, -6, 9];
const akarKembar = hitungAkarPersamaanKuadrat(koefisienAkarKembar);
console.log(`Akar-akar persamaan kuadrat ${koefisienAkarKembar[0]}x^2 + (${koefisienAkarKembar[1]})x + (${koefisienAkarKembar[2]}) = 0 adalah:`);
if (akarKembar.length === 0) {
    console.log("Tidak ada akar real atau input tidak valid.");
} else if (akarKembar.length === 1 || akarKembar[0] === akarKembar[1]) {
    console.log(`Akar kembar: x = ${akarKembar[0]}`);
} else {
    console.log(`x1 = ${akarKembar[0]}, x2 = ${akarKembar[1]}`);
}
console.log("----------------------------------------------------");

// --- Additional Example: Quadratic Equation with No Real Roots ---
// Equation: x^2 + x + 1 = 0
const koefisienTanpaAkar = [1, 1, 1];
const tanpaAkar = hitungAkarPersamaanKuadrat(koefisienTanpaAkar);
console.log(`Akar-akar persamaan kuadrat ${koefisienTanpaAkar[0]}x^2 + (${koefisienTanpaAkar[1]})x + (${koefisienTanpaAkar[2]}) = 0 adalah:`);
if (tanpaAkar.length === 0) {
    console.log("Tidak ada akar real.");
} else {
    // This case should ideally not be reached if logic for no real roots is correct
    console.log(`x1 = ${tanpaAkar[0]}, x2 = ${tanpaAkar[1]}`);
}
console.log("----------------------------------------------------");

// --- Additional Example: Case where 'a' coefficient is 0 ---
// Equation: 0x^2 + 2x - 4 = 0 (Linear equation: 2x - 4 = 0 => x = 2)
const koefisienANol = [0, 2, -4];
console.log(`Mencoba mencari akar untuk persamaan dengan koefisien a=0: (${koefisienANol[0]})x^2 + (${koefisienANol[1]})x + (${koefisienANol[2]}) = 0`);
const hasilPersamaanANol = hitungAkarPersamaanKuadrat(koefisienANol);
// Expecting an error message from the function and an empty array
if (hasilPersamaanANol.length === 0) {
    console.log("Fungsi mengembalikan array kosong (sesuai ekspektasi untuk a=0 atau tidak ada akar real).");
}
console.log("----------------------------------------------------");