"use strict";
const Sequelize = require("sequelize");
const config = require("../config/");

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
    host: config.dbHost,
    dialect: "mysql",
    port: config.dbPort,
    logging: false,
    
});

const Cliente = require("./cliente")(sequelize, Sequelize.DataTypes)
const Pokemon = require("./pokemon")(sequelize, Sequelize.DataTypes)
const Pokemoncliente = require("./pokemoncliente")(sequelize, Sequelize.DataTypes)
const Parametro = require("./parametro")(sequelize, Sequelize.DataTypes)
const Valorparametro = require("./valorparametro")(sequelize, Sequelize.DataTypes)

const db = {
    Cliente,
    Pokemon,
    Pokemoncliente,
    Parametro,
    Valorparametro
}

db.Cliente.associate(db);
db.Pokemon.associate(db);
db.Pokemoncliente.associate(db);
db.Parametro.associate(db);
db.Valorparametro.associate(db);

db.sequelize=sequelize;
db.Sequelize = Sequelize;
sequelize.sync();

module.exports =  db 