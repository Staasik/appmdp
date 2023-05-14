export const questionModel = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        diagnosticID:{
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }, {
        tableName: 'Questions'
    })

    return Question
}