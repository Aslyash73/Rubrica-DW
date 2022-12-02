module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define(
      "Cliente",
      {
        id: {
            type: DataTypes.INTEGER,
            autoIcrement: true,
            primaryKey: true,
        },
        nombre: { type: DataTypes.STRING(500), allowNull: false },
        apellido: {type: DataTypes.VARCHAR(500), allowNull: false},
        edad: {type: DataTypes.VARCHAR(500), allowNull: false},
        telefono: {type: DataTypes.VARCHAR(500), allowNull: false},
        cedula: {type: DataTypes.VARCHAR(500), allowNull: false},
        estado : {type: DataTypes.TINYINT(4), allowNull:  false, defaultValue:1},
    },
    {

       NombreTabla: "Cliente",
       timeStamps: false,
    }

    );
    return Cliente;
};