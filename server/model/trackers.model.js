export const trackersModel = (sequelize, DataTypes) => {
    const Trackers = sequelize.define('trackers', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        data:{
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        tableName: 'Trackers'
    })

    return Trackers
}