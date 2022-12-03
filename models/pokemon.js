module.exports = (sequelize, DataTypes) => {
    const Pokemon = sequelize.define(
      "Pokemon",
      {
        id: {
            type: DataTypes.BIGINT,
            autoIcrement: true,
            primaryKey: true,
        },
        nombre: { type: DataTypes.STRING(500), allowNull: false },
        ataque: {type: DataTypes.STRING(500), allowNull: false},
        defensa: {type: DataTypes.STRING(500), allowNull: false},
        tipo: {type: DataTypes.DATE, allowNull: false},
        idApi: {type: DataTypes.STRING(500), allowNull: false},
        idPokemon: {type: DataTypes.STRING(500), allowNull: false},
        imagen: {type: DataTypes.STRING(500), allowNull: false},
        estado : {type: DataTypes.TINYINT(4), allowNull:  false, defaultValue:1},
    },
    {

       NombreTabla: "Pokemon",
       timeStamps: false,
    }
        
    );

    Pokemon.associate = function (models) {
        Pokemon.hasMany(models.pokemonCliente, {
            foreignKey: "idPokemon",
            as: "pokemonCliente",
        });
    };

    return Pokemon;
};
