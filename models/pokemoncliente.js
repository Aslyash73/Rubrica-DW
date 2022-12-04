module.exports = (sequelize, DataTypes) => {
    const PokemonCliente = sequelize.define(
      "PokemonCliente",
      {
        id: {
            type: DataTypes.BIGINT,
            autoIcrement: true,
            primaryKey: true,
        },
        id_cliente: {
            type: DataTypes.BIGINT(20), 
            allowNull: false
        },
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
    };

    return PokemonCliente;
};