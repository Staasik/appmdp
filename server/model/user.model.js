export const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [2,10],
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            len: [2,10],
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [2,10],
        },
        role:{
            type: DataTypes.STRING,
            allowNull: false,
            isIn: {
                args: [['admin', 'user']],
                msg: "Must be admin or user"
              }
        }
    }, {
        tableName: 'Users'
    })

    return User
}