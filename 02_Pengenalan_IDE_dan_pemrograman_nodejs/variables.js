// Jika nama tidak akan berubah, gunakan `const`
const fullName = "Dawnie Julian";
const nim = 2211104064;

console.log(fullName);
console.log("Nama saya adalah " + fullName + " dan nim saya adalah " + nim);
console.log(`Nama saya adalah ${fullName} dan nim saya adalah ${nim}`);
console.log(`Nama saya adalah ${fullName}
nim saya adalah ${nim}`);

// Jika memang ingin mengubah nilai nama, gunakan `let`:
let name = "Dawnie Julian";

console.log(name);

// Mengubah nilai variabel name
name = "ayam";
console.log("Setelah diubah, nama saya adalah " + name);
