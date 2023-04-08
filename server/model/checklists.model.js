export const checkListsModel = (sequelize, DataTypes) => {
    const CheckLists = sequelize.define('checklists', {
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        checkListNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, {
        tableName: 'CheckLists'
    })

    return CheckLists
}