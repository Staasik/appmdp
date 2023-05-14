export const answersModel = (sequelize, DataTypes) => {
    const Answers = sequelize.define('answers', {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value:{
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        questionID:{
            type: DataTypes.BIGINT,
            allowNull: false,
        }
    }, {
        tableName: 'Answers'
    })

    return Answers
}