const config = require('./dbConfig'),
    sql = require('mssql'),
    _ = require('lodash')

const getUsersData = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("select Логин as login, Пароль as password from Заказчики")
        console.log(emploeeys)
        return emploeeys
    } catch (e) {
        console.log(e)
    }
}
const getItems = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query(`select  Код_товара as id, Товары.Наименование as name, Единицы_измерения.Наименование as edname,цена as price, Код_категории_сладостей as catid, состав as discription
        from Товары, Единицы_измерения where Единицы_измерения.Код_единицы_измерения=Товары.Код_единицы_измерения and Товары.Срок_годности>GetDate()`)
        console.log(emploeeys)
        return emploeeys
    } catch (e) {
        console.log(e)
    }
}

const acceptLogin = async() => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("select Логин as login, Пароль as password from Заказчики")
        console.log(emploeeys)

        return emploeeys
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getUsersData,
    getItems,
    acceptLogin
}