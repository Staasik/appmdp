import { Sequelize } from 'sequelize'
import { tokenModel } from './token.model.js'
import { userModel } from './user.model.js'
import { diagosticsResultModel } from './diagosticsResult.model.js'
import { diagnosticModel } from './diagnostic.model.js'

const sequelize = new Sequelize('appmdp', 'defaultUser', '12345', {
    host: "DESKTOP-OOOUVM1",
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
})

export const db = {}
db.sequelize = sequelize
db.models = {}
db.models.userModel = userModel(sequelize, Sequelize.DataTypes)
db.models.tokenModel = tokenModel(sequelize, Sequelize.DataTypes)
db.models.diagosticsResultModel = diagosticsResultModel(sequelize, Sequelize.DataTypes)
db.models.diagnosticModel = diagnosticModel(sequelize, Sequelize.DataTypes)