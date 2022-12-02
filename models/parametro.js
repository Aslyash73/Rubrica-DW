module.exports = (sequelize, DataTypes) => {
    const Parametro = sequelize.define(
      "parametro",
      {
        id: {
            type: DataTypes.INTEGER,
            autoIcrement: true,
            primaryKey: true,
        },
        nombre: { type: DataTypes.STRING(500), allowNull: false },
        estado : {type: DataTypes.TINYINT(4), allowNull:  false, defaultValue:1},
    },
    {

       NombreTabla: "parametro",
       timeStamps: false,
    }

    );
    return Parametro;
};