// Import fs untuk membaca file
import fs from 'fs';

// Membaca file JSON
const data = fs.readFileSync('./jurnal7_2_2211104064.json', 'utf-8');
const teamMembers = JSON.parse(data);

// Menampilkan hasil ke console
console.log("=== Team Member List ===");
teamMembers.forEach(member => {
  console.log(`${member.nim} ${member.firstname} ${member.lastname} (${member.age} ${member.gender})`);
});
