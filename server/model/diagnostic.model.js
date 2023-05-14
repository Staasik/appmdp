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
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        answersDescription: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        published:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, {
        tableName: 'Diagnostics'
    })

    return Diagnostic
}