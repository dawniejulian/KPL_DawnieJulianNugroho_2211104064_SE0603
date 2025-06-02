// Import fs untuk membaca file
import fs from 'fs';

// Membaca file JSON
const data = fs.readFileSync('./jurnal7_3_2211104064.json', 'utf-8');
const glossary = JSON.parse(data);

// Mengakses bagian GlossEntry saja
const glossEntry = glossary.glossary.GlossDiv.GlossList.GlossEntry;

// Menampilkan hasil ke console
console.log("=== Glossary Entry ===");
console.log(`ID: ${glossEntry.ID}`);
console.log(`SortAs: ${glossEntry.SortAs}`);
console.log(`GlossTerm: ${glossEntry.GlossTerm}`);
console.log(`Acronym: ${glossEntry.Acronym}`);
console.log(`Abbreviation: ${glossEntry.Abbrev}`);
console.log(`Definition: ${glossEntry.GlossDef.para}`);
console.log(`GlossSee: ${glossEntry.GlossSee}`);
console.log(`GlossSeeAlso: ${glossEntry.GlossDef.GlossSeeAlso.join(', ')}`);
