const { Database } = require("sqlite-async");
const path = require("path");

async function initDatabase() {
  const db = new Database();
  await db.open(path.join(__dirname, "database.sqlite"));

  await db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lat TEXT,
      lng TEXT,
      name TEXT,
      about TEXT,
      whatsapp TEXT,
      images TEXT,
      instructions TEXT,
      opening_hours TEXT,
      open_on_weekends TEXT
    );
  `);

  return db;
}

module.exports = initDatabase();