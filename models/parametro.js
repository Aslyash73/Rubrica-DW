module.exports = (sequelize, DataTypes) => {
    const Parametro = sequelize.define(
        "parametro",
        {
            id: {
                type: DataTypes.BIGINT(20),
                primaryKey: true,
                autoIncrement: true,
            },
            nombre: {
                type: DataTypes.STRING(500),
                allowNull: false
            },
            estado: {
                type: DataTypes.TINYINT(4),
                defaultValue: 1
            },
        },
        {
            NombreTabla: "parametro",
            timeStamps: false,
        }
    );

    Parametro.associate = function (models) {
        Parametro.hasMany(models.Valorparametro, {
            foreignkey: "idParametro",
            as: "valor_parametro",
        })
    }


    return Parametro;
};