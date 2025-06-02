const fs = require('fs');

class BankTransferConfig {
    constructor(filename = 'bank_transfer_config.json') {
        this.filename = filename;
        this.config = this.loadOrDefault();
    }

    loadOrDefault() {
        if (fs.existsSync(this.filename)) {
            const data = fs.readFileSync(this.filename);
            return JSON.parse(data);
        } else {
            const defaultData = {
                lang: "en",
                transfer: {
                    threshold: 25000000,
                    low_fee: 6500,
                    high_fee: 15000
                },
                methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
                confirmation: {
                    en: "yes",
                    id: "ya"
                }
            };
            fs.writeFileSync(this.filename, JSON.stringify(defaultData, null, 2));
            return defaultData;
        }
    }
}

module.exports = BankTransferConfig;