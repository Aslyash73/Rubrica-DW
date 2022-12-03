module.exports = (sequelize, DataTypes) => {
    const PokemonCliente = sequelize.define(
      "PokemonCliente",
      {
        id: {
            type: DataTypes.INTEGER,
            autoIcrement: true,
            primaryKey: true,
        },
        idCliente: {type: DataTypes.BIGINT, allowNull: false},
        idPokemon: {type: DataTypes.DATE, allowNull: false},
        estado : {type: DataTypes.TINYINT(4), allowNull:  false, defaultValue:1},
    },
    {

       NombreTabla: "PokemonCliente",
       timeStamps: false,
    }

    );

    PokemonCliente.associate = function (models) {
        PokemonCliente.belongsTo(models.Pokemon, {
            foreignKey: "idPokemon",
            as: "Pokemon",
        });
      PokemonCliente.belongsTo(models.Cliente, {
            foreignKey: "id_cliente",
            as: "Cliente",
        });
    };

    return PokemonCliente;
};