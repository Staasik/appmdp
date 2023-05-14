export const diagnosticsOptionsModel = (sequelize, DataTypes) => {
    const DiagnosticsOptions = sequelize.define('diagnosticsOptions', {
        diagnosticID: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        minValue: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        maxValue:{
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }, {
        tableName: 'DiagnosticsOptions'
    })

    return DiagnosticsOptions
}