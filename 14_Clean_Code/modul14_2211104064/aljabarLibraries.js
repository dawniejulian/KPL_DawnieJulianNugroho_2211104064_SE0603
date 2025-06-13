// aljabarLibraries.js

/**
 * @file Library of algebraic functions.
 * @module aljabarLibraries
 */

/**
 * Calculates the real roots of a quadratic equation ax^2 + bx + c = 0.
 * Coefficients are provided as an array [a, b, c].
 * 'a' cannot be zero for a quadratic equation.
 * @param {number[]} coefficients - An array containing the coefficients [a, b, c].
 * @returns {number[]} An array containing the real roots, sorted in ascending order.
 * Returns an empty array if there are no real roots or if 'a' is zero.
 */
function hitungAkarPersamaanKuadrat(coefficients) {
    const [a, b, c] = coefficients;

    // Validate coefficient 'a'
    if (a === 0) {
        console.error("Koefisien 'a' tidak boleh nol untuk persamaan kuadrat.");
        return []; // Not a quadratic equation, or leads to division by zero
    }

    const diskriminan = (b * b) - (4 * a * c);

    if (diskriminan < 0) {
        return []; // No real roots
    }

    const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
    const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);

    // Return sorted roots for consistency
    return [akar1, akar2].sort((x, y) => x - y);
}

/**
 * Calculates the coefficients of the expansion of (px + q)^2.
 * The expansion results in p^2x^2 + 2pqx + q^2.
 * Terms are provided as an array [p, q].
 * @param {number[]} terms - An array containing the terms [p, q] for the expression (px + q).
 * @returns {number[]} An array representing the coefficients of the expanded form: [p^2, 2pq, q^2].
 */
function hitungHasilKuadrat(terms) {
    const [p, q] = terms; // Using p, q for (px+q)^2 to distinguish from quadratic's a,b,c

    // Expansion: (px + q)^2 = p^2x^2 + 2pqx + q^2
    const koefisienPkuadrat = p * p;
    const koefisien2pq = 2 * p * q;
    const koefisienQkuadrat = q * q;

    return [koefisienPkuadrat, koefisien2pq, koefisienQkuadrat];
}

// Exporting the functions for use in other modules
module.exports = {
    hitungAkarPersamaanKuadrat,
    hitungHasilKuadrat,
};