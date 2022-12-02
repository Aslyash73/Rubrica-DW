module.exports = (sequelize, DataTypes) => {
    const Autos = sequelize.define(
      "Autos",
      {
        id: {
            type: DataTypes.BIGINT,
            autoIcrement: true,
            primaryKey: true,
        },
        nombre: { type: DataTypes.STRING(500), allowNull: false },
        marca: {type: DataTypes.VARCHAR(500), allowNull: false},
        modelo: {type: DataTypes.VARCHAR(500), allowNull: false},
        año_produccion: {type: DataTypes.DATETIME, allowNull: false},
        matricula: {type: DataTypes.VARCHAR(500), allowNull: false},
        color: {type: DataTypes.VARCHAR(500), allowNull: false},
        estado : {type: DataTypes.TINYINT(4), allowNull:  false, defaultValue:1},
    },
    {

       NombreTabla: "Autos",
       timeStamps: false,
    }
        
    );

    return Autos;
};
