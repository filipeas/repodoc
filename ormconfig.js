require('dotenv/config');

module.exports = {
  name: 'default',
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: [process.env.DB_MIGRATIONS_PATH],
  entities: [process.env.DB_ENTITIES],
  cli: {
    migrationsDir: process.env.DB_MIGRATIONS_DIR
  }
}
