require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

const app = express();

// Middleware bawaan Express (opsional, jika kamu nanti butuh parsing body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inisialisasi i18next dengan backend file
i18next
  .use(Backend)
  .use(middleware.LanguageDetector) // Gunakan deteksi bahasa dari middleware
  .init({
    fallbackLng: 'en',
    preload: ['en', 'id'], // Bahasa-bahasa yang akan dimuat di awal
    backend: {
      loadPath: './locales/{{lng}}/translation.json', // Path ke file terjemahan
    },
  });

// Middleware i18next untuk Express
app.use(middleware.handle(i18next));

// Middleware custom untuk mengganti bahasa dari query ?lang=
app.use((req, res, next) => {
  const lang = req.query.lang || process.env.DEFAULT_LANGUAGE || 'en';
  req.i18n.changeLanguage(lang, (err) => {
    if (err) console.error('Error changing language:', err);
    next();
  });
});

// Rute utama
app.get('/', (req, res) => {
  const name = req.query.name || 'Guest'; // Nama pengguna dari query parameter
  const welcomeMessage = req.t('welcome'); // Terjemahan untuk "welcome"
  const greetingMessage = req.t('greeting', { name }); // Terjemahan dengan interpolasi
  const farewellMessage = req.t('farewell'); // Terjemahan untuk "farewell"

  res.send(`
    <h1>${welcomeMessage}</h1>
    <p>${greetingMessage}</p>
    <p>${farewellMessage}</p>
  `);
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
