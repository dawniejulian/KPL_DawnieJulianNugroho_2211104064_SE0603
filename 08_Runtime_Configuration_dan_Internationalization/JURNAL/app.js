const readline = require('readline');
const BankTransferConfig = require('./BankTransferConfig');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function question(prompt) {
    return new Promise(resolve => rl.question(prompt, resolve));
}

async function main() {
    const config = new BankTransferConfig().config;
    const language = config.lang;

    const amountInput = await question(language === 'id' ? 'Masukkan jumlah transfer: ' : 'Enter amount to transfer: ');
    const amount = parseInt(amountInput);

    const fee = amount <= config.transfer.threshold ? config.transfer.low_fee : config.transfer.high_fee;
    const total = amount + fee;

    console.log(language === 'id' ? `Biaya transfer = ${fee}` : `Transfer fee = ${fee}`);
    console.log(language === 'id' ? `Total biaya = ${total}` : `Total amount = ${total}`);

    console.log(language === 'id' ? 'Pilih metode transfer:' : 'Choose transfer method:');
    config.methods.forEach((method, idx) => console.log(`${idx + 1}. ${method}`));
    await question(language === 'id' ? 'Masukkan pilihan metode: ' : 'Enter transfer method number: ');

    const confirmInput = await question(language === 'id' ? `Ketik "${config.confirmation.id}" untuk konfirmasi: ` : `Type "${config.confirmation.en}" to confirm: `);
    const validConfirm = language === 'id' ? config.confirmation.id : config.confirmation.en;

    if (confirmInput.trim().toLowerCase() === validConfirm) {
        console.log(language === 'id' ? 'Transfer berhasil.' : 'Transfer completed.');
    } else {
        console.log(language === 'id' ? 'Transfer dibatalkan.' : 'Transfer cancelled.');
    }

    rl.close();
}

main();