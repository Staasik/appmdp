export const questionModel = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            isIn: {
                args: [['oneAnswer', 'someAnswers', 'numbersList']],
                msg: "Must be oneAnswer,someAnswers or numbersList"
              }
        },
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