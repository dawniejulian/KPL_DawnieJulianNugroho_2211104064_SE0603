const fs = require('fs');
class KuliahMahasiswa2211104064 {
        ReadJSON() {
        try {
            const rawData = fs.readFileSync('./tp7_2_2211104064.json');
            this.data = JSON.parse(rawData);
            console.log("Daftar mata kuliah yang diambil:");
            this.data.courses.forEach((course, index) => {
                console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
            });
            
            return this.data;
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca file JSON:", error.message);
            return null;
        }
    }
}

// Contoh penggunaan
const kuliahMahasiswa = new KuliahMahasiswa2211104064();
kuliahMahasiswa.ReadJSON();

module.exports = KuliahMahasiswa2211104064;