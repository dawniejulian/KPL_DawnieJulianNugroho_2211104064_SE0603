/**
 * @file Refactored JurnalModul5.js
 * @description This file contains refactored code for Penjumlahan and SimpleDataBase classes
 * according to Modul 14 guidelines.
 */

// 1. Class for summing three numbers
/**
 * @class Penjumlahan
 * @description A utility class with a static method to calculate the sum of three numbers.
 */
class Penjumlahan {
    /**
     * Calculates the sum of three numbers.
     * It explicitly converts parameters to numbers before summation to ensure correct arithmetic,
     * especially if inputs might be string representations of numbers.
     * @static
     * @param {number|string} num1 - The first number or its string representation.
     * @param {number|string} num2 - The second number or its string representation.
     * @param {number|string} num3 - The third number or its string representation.
     * @returns {number} The sum of the three numbers.
     */
    static jumlahTigaAngka(num1, num2, num3) {
        // Explicitly convert parameters to numbers
        return Number(num1) + Number(num2) + Number(num3);
    }
}

// Example usage for Penjumlahan class
// Demonstrating with example numbers (e.g., from a NIM: 22, 11, 10)
let hasilPenjumlahan = Penjumlahan.jumlahTigaAngka(22.0, 11.0, 10.0);
console.log("Hasil Penjumlahan: ", hasilPenjumlahan);

console.log("---"); // Separator for better output readability

// 2. Generic class for a simple database
/**
 * @class SimpleDataBase
 * @template T
 * @description A simple generic database class to store various types of data
 * along with the timestamp of their addition.
 */
class SimpleDataBase {
    /**
     * Initializes a new instance of SimpleDataBase.
     * `storedData` array will hold the actual data entries.
     * `inputDates` array will hold the ISO timestamp string for when each corresponding data entry was added.
     */
    constructor() {
        /** @type {Array<T>} Data storage array */
        this.storedData = [];
        /** @type {Array<string>} Timestamp storage array */
        this.inputDates = []; // Stores ISO date strings
    }

    /**
     * Adds new data to the database and records the current timestamp.
     * @param {T} data - The data item to be added to the database.
     */
    addNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toISOString()); // Record timestamp in ISO format
    }

    /**
     * Prints all data entries to the console, including the data itself
     * and the timestamp when it was stored.
     * If the database is empty, it prints a corresponding message.
     */
    printAllData() {
        if (this.storedData.length === 0) {
            console.log("Database is empty. No data to display.");
            return;
        }

        console.log("Data in SimpleDataBase:");
        this.storedData.forEach((data, index) => {
            // Using template literal for clear and formatted output
            console.log(`Data ${index + 1}: ${JSON.stringify(data)}, disimpan pada ${this.inputDates[index]}`);
        });
    }
}

// Example usage for SimpleDataBase class
let simpleDb = new SimpleDataBase(); // Renamed 'db' to 'simpleDb' for clarity
simpleDb.addNewData(22.0);
simpleDb.addNewData(11.0);
simpleDb.addNewData(10.0);
simpleDb.addNewData("Contoh String Data"); // Demonstrating generic nature with string data
simpleDb.addNewData({ id: 1, value: "Contoh Object Data" }); // Demonstrating with object data
simpleDb.printAllData();

console.log("---");

// Example demonstrating an empty database output
let emptyDb = new SimpleDataBase();
console.log("Attempting to print data from an empty database:");
emptyDb.printAllData();