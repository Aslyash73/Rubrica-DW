const Sequelize = require("sequelize");
const config = require("../config/");
const {db_database} = require("../config/");

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: "mysql",
    port: config.port,
    logging: false,
    
});

const Cliente = require("./cliente")(sequelize, Sequelize.DataTypes)
const Autos = require("./autos")(sequelize, Sequelize.DataTypes)
const Ventas = require("./ventas")(sequelize, Sequelize.DataTypes)
const Parametro = require("./parametro")(sequelize, Sequelize.DataTypes)
const Valorparametro = require("./valorparametro")(sequelize, Sequelize.DataTypes)
sequelize.sync()

const db = {
    Cliente,
    Autos,
    Ventas,
    Parametro,
    Valorparametro
}

db.Autos.associate(db);
db.Cliente.associate(db);
db.Ventas.associate(db);
db.Parametro.associate(db);
db.Valorparametro.associate(db);

db.sequelize=sequelize;

sequelize.sync();

module.exports = { db }