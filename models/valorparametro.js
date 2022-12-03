module.exports = (sequelize, DataTypes) => {
    const ValorParametro = sequelize.define(
        "valor_parametro",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIcrement: true,
                primaryKey: true,
            },
            idParametro: {
                type: DataTypes.BIGINT,
                allowNull: false
            },
            detalle: { type: DataTypes.STRING(500), allowNull: false },
            estado: { type: DataTypes.TINYINT(4), allowNull: false, defaultValue: 1 },
        },
        {
            NombreTabla: "parametro",
            timeStamps: false,
        }

    );

    ValorParametro.associate = function (models) {
        ValorParametro.belongsTo(models.Parametro, {
            foreignkey: "idParametro",
            as: "parametro",
        })
    }

    return ValorParametro;
};