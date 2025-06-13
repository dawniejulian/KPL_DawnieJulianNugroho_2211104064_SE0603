// Import modul yang diperlukan
const fs = require('fs');
const crypto = require('crypto'); // Untuk hashing password

const USERS_FILE = 'users.json';

// Fungsi untuk membaca data pengguna dari file JSON
function readUsers() {
    try {
        if (fs.existsSync(USERS_FILE)) {
            const data = fs.readFileSync(USERS_FILE);
            return JSON.parse(data);
        }
        return []; // Jika file tidak ada, kembalikan array kosong
    } catch (error) {
        console.error('Gagal membaca file users:', error);
        return [];
    }
}

// Fungsi untuk menyimpan data pengguna ke file JSON
function saveUsers(users) {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2)); // 'null, 2' untuk pretty print JSON
    } catch (error) {
        console.error('Gagal menyimpan file users:', error);
    }
}

// --- Fitur Secure Coding Practices ---

// A. Input Validation [cite: 20]

// i. Validasi range data & ii. Validasi panjang data [cite: 21, 22]
function validateUsername(username) {
    // Hanya boleh huruf alfabet ASCII dan angka [mirip contoh: 21]
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return "Username hanya boleh mengandung huruf alfabet ASCII dan angka.";
    }
    // Minimal 5 karakter, Maksimal 20 karakter [contoh: 22]
    if (username.length < 5 || username.length > 20) {
        return "Panjang username harus antara 5 dan 20 karakter.";
    }
    return null; // Valid
}

// iii. Handling data invalid (sudah termasuk dalam pesan return di atas) [cite: 23, 24]

// B. Password Management [cite: 20]

// i. Password hashing (SHA256) [cite: 25, 26]
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// ii. Password rules [cite: 27, 28]
function validatePassword(password, username) {
    // Minimal 8 karakter [contoh: 22]
    if (password.length < 8) {
        return "Password minimal harus 8 karakter.";
    }
    // Harus mengandung angka [mirip contoh: 21]
    if (!/\d/.test(password)) {
        return "Password harus mengandung setidaknya satu angka.";
    }
    // Harus mengandung minimal 1 karakter unik (!@#$%^&*) [contoh: 28]
    if (!/[!@#$%^&*]/.test(password)) {
        return "Password harus mengandung setidaknya satu karakter unik (!@#$%^&*).";
    }
    // Password tidak boleh mengandung kata dari username [contoh: 28]
    if (username && password.toLowerCase().includes(username.toLowerCase())) {
        return "Password tidak boleh mengandung username.";
    }
    return null; // Valid
}


// --- Fungsi Registrasi dan Login ---

function registerUser(username, password) {
    const users = readUsers();

    // Validasi Username
    const usernameValidationError = validateUsername(username);
    if (usernameValidationError) {
        console.log(`Registrasi Gagal: ${usernameValidationError}`);
        return false;
    }

    // Validasi Password
    const passwordValidationError = validatePassword(password, username);
    if (passwordValidationError) {
        console.log(`Registrasi Gagal: ${passwordValidationError}`);
        return false;
    }

    // Cek apakah username sudah ada
    if (users.find(user => user.username === username)) {
        console.log("Registrasi Gagal: Username sudah digunakan.");
        return false;
    }

    // Hash password sebelum disimpan [cite: 25]
    const hashedPassword = hashPassword(password);

    // Simpan user baru
    users.push({ username, password: hashedPassword });
    saveUsers(users);
    console.log("Registrasi berhasil!");
    return true;
}

function loginUser(username, password) {
    const users = readUsers();
    const user = users.find(u => u.username === username);

    if (!user) {
        console.log("Login Gagal: Username tidak ditemukan.");
        return false;
    }

    // Hash password yang diinput dan bandingkan dengan yang tersimpan
    const hashedPassword = hashPassword(password);
    if (user.password === hashedPassword) {
        console.log(`Login berhasil! Selamat datang, ${username}.`);
        // Di sini Anda bisa melanjutkan ke fungsionalitas utama aplikasi
        // (misalnya, fungsionalitas dari Modul 8)
        return true;
    } else {
        console.log("Login Gagal: Password salah.");
        return false;
    }
}

// --- Contoh Penggunaan (Simulasi CLI sederhana) ---
// Untuk aplikasi desktop sebenarnya, Anda akan mengganti ini dengan input dari GUI

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function runApplication() {
    readline.question("Pilih aksi (1: Registrasi, 2: Login, 3: Keluar): ", (choice) => {
        if (choice === '1') {
            readline.question("Masukkan username: ", (username) => {
                readline.question("Masukkan password: ", (password) => {
                    registerUser(username, password);
                    runApplication(); // Kembali ke menu
                });
            });
        } else if (choice === '2') {
            readline.question("Masukkan username: ", (username) => {
                readline.question("Masukkan password: ", (password) => {
                    loginUser(username, password);
                    runApplication(); // Kembali ke menu
                });
            });
        } else if (choice === '3') {
            readline.close();
        } else {
            console.log("Pilihan tidak valid.");
            runApplication();
        }
    });
}

// Jalankan aplikasi
console.log("Selamat datang di Aplikasi Modul 15");
runApplication();