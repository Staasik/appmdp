export const diagosticsResultModel = (sequelize, DataTypes) => {
    const DiagosticsResult = sequelize.define('diagosticsResult', {
        diagnosticID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        answers:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'DiagosticsResults'
    })

    return DiagosticsResult
}