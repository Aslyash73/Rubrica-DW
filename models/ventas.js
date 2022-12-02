module.exports = (sequelize, DataTypes) => {
    const Ventas = sequelize.define(
      "ventas",
      {
        id: {
            type: DataTypes.INTEGER,
            autoIcrement: true,
            primaryKey: true,
        },
        IVA: {type: DataTypes.BIGINT, allowNull: false},
        fecha_venta: {type: DataTypes.DATETIME, allowNull: false},
        DNI: {type: DataTypes.VARCHAR(500), allowNull: false},
        estado : {type: DataTypes.TINYINT(4), allowNull:  false, defaultValue:1},
    },
    {

       NombreTabla: "ventas",
       timeStamps: false,
    }

    );
    return Ventas;
};