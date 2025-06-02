// Import module
const fs = require('fs');
const readline = require('readline');

// Class CovidConfig
class CovidConfig {
    constructor() {
        this.configFile = 'covid_config.json';
        this.defaultConfig = {
            satuan_suhu: 'celcius',
            batas_hari_deman: 14,
            pesan_ditolak: 'Anda tidak diperbolehkan masuk ke dalam gedung ini',
            pesan_diterima: 'Anda dipersilahkan untuk masuk ke dalam gedung ini'
        };
        this.loadConfig();
    }

    loadConfig() {
        if (fs.existsSync(this.configFile)) {
            const data = fs.readFileSync(this.configFile);
            this.config = JSON.parse(data);
        } else {
            this.config = this.defaultConfig;
        }
    }

    ubahSatuan() {
        if (this.config.satuan_suhu === 'celcius') {
            this.config.satuan_suhu = 'fahrenheit';
        } else {
            this.config.satuan_suhu = 'celcius';
        }
    }
}

// Main program
async function main() {
    const covidConfig = new CovidConfig();
    covidConfig.ubahSatuan(); // Panggil ubah satuan dulu sesuai instruksi

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const tanya = (pertanyaan) => new Promise(resolve => rl.question(pertanyaan, resolve));

    try {
        const suhuInput = await tanya(`Berapa suhu badan anda saat ini? Dalam nilai ${covidConfig.config.satuan_suhu}: `);
        const hariInput = await tanya('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ');

        const suhu = parseFloat(suhuInput);
        const hari = parseInt(hariInput);

        let suhuNormal = false;
        if (covidConfig.config.satuan_suhu === 'celcius') {
            suhuNormal = suhu >= 36.5 && suhu <= 37.5;
        } else {
            suhuNormal = suhu >= 97.7 && suhu <= 99.5;
        }

        const hariNormal = hari < covidConfig.config.batas_hari_deman;

        if (suhuNormal && hariNormal) {
            console.log(covidConfig.config.pesan_diterima);
        } else {
            console.log(covidConfig.config.pesan_ditolak);
        }
    } finally {
        rl.close();
    }
}

main();
