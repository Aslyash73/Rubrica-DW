module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define(
      "Cliente",
      {
        id: {
            type: DataTypes.BIGINT(20),
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: { type: DataTypes.STRING(500), allowNull: false },
        apellido: {type: DataTypes.STRING(500), allowNull: false},
        telefono: {type: DataTypes.STRING(500), allowNull: false},
        ciudad: {type: DataTypes.STRING(500), allowNull: false},
        estado : {type: DataTypes.TINYINT(4), allowNull:  false, defaultValue:1},
    },
    {

       NombreTabla: "Cliente",
       timeStamps: false,
    }

    );
    Cliente.associate = function (models) {
        Cliente.hasMany(models.Pokemoncliente, {
            foreignKey: "id_cliente",
            as: "PokemonsCliente",
        });
    };

    return Cliente;
};