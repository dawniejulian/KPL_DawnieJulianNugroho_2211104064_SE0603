// Import fs untuk membaca file
import fs from 'fs';

// Membaca file JSON
const data = fs.readFileSync('./jurnal7_1_2211104064.json', 'utf-8');
const mahasiswa = JSON.parse(data);

// Menampilkan hasil ke console
console.log("=== Data Mahasiswa ===");
console.log(`Nama  : ${mahasiswa.nama}`);
console.log(`NIM   : ${mahasiswa.nim}`);
console.log(`Kelas : ${mahasiswa.kelas}`);
console.log(`Email : ${mahasiswa.email}`);
