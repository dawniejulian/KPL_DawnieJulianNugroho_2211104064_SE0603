const fs = require('fs');

class DataMahasiswa2211104064 {
    ReadJSON() {
        try {
            const rawData = fs.readFileSync('./tp7_1_2211104064.json');
            
            this.data = JSON.parse(rawData);
            
            
            console.log(`Nama ${this.data.nama.depan} ${this.data.nama.belakang} dengan nim ${this.data.nim} dari fakultas ${this.data.fakultas}`);
            
            return this.data;
        } catch (error) {
            console.error("Terjadi kesalahan saat membaca file JSON:", error.message);
            return null;
        }
    }
}

// Contoh penggunaan
const dataMahasiswa = new DataMahasiswa2211104064();
dataMahasiswa.ReadJSON();

module.exports = DataMahasiswa2211104064;