export const questionModel = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answers:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'Questions'
    })

    return Question
}