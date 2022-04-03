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

const acceptLogin = async(login, password) => {
    try {
        let pool = await sql.connect(config);
        let emploeeys = pool.request().query("select name_user as name, login_user as login, password_user as password from Users")
        let tempUser = _.find((await emploeeys).recordset, { login: login, password: password })
        if (tempUser) { return {...tempUser, error: false } } else {
            tempUser = _.find((await emploeeys).recordset, { login: login })
            if (tempUser) { return { error: true, message: "Пароль не верный" } } else { return { error: true, message: "Логин не верный" } }
        }
    } catch (e) {
        console.log(e)
    }
}

const registrationNewUser = async(name, login, password) => {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query("select login_user as login from Users")
        if (!_.find((await users).recordset, { login: login })) {
            pool.request().query(`insert into Users values (${(await users).recordset.length + 1}, '${name}', '${login}', '${password}')`)
            return { error: false, message: "Успешно зарегистрирован" }
        } else {
            return { error: true, message: "Пользователь с таким логином уже существует" }
        }
    } catch (e) {
        console.log(e)
    }
}

const setResults = async(login, password, diagnnumber, answers) => {
    console.log(login)
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query("select login_user as login, password_user as password, id_user as id from Users")
        let tempuser = _.find((await users).recordset, { login: login, password: password })
        if (tempuser) {
            pool.request().query(`insert into Diagnostic${diagnnumber} values (${tempuser.id}, '${answers}', '${new Date().toISOString().slice(0, 19).replace('T', ' ')}')`)
            return { error: false, message: "Данные успешно занесены в базу" }
        } else {
            return { error: true, message: "Пользователя не существует" }
        }
    } catch (e) {
        console.log(e)
    }
}

const getResults = async(login, password, diagnnumber) => {
    try {
        let pool = await sql.connect(config);
        let users = pool.request().query("select login_user as login, password_user as password, id_user as id from Users")
        let tempuser = _.find((await users).recordset, { login: login, password: password })
        if (tempuser) {
            let answers = pool.request().query(`select answers, date from Diagnostic${diagnnumber} where date=(select max(date) from Diagnostic${diagnnumber} where user_id=${tempuser.id})`)
            console.log((await answers).recordset)
            return { error: false, data: (await answers).recordset }
        } else {
            return { error: true, message: "Пользователя не существует" }
        }
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getUsersData,
    registrationNewUser,
    getItems,
    acceptLogin,
    setResults,
    getResults
}