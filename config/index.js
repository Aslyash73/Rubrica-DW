const dotenv = require("dotenv");

dotenv.config();

const configuration = {
    port: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbDialect: process.env_DB_DIALECT,
    dbPort: process.env.DB_PORT
};

module.exports = configuration;