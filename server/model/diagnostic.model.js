export const diagnosticModel = (sequelize, DataTypes) => {
    const Diagnostic = sequelize.define('diagnostic', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        questionID:{
            type: DataTypes.BIGINT,
            allowNull: true,
        }
    }, {
        tableName: 'Diagnostics'
    })

    return Diagnostic
}