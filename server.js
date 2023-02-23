const express = require('express'),
    bodyParser = require("body-parser"),
    dbOperation = require('./dbFiles/dbOperation'),
    cors = require('cors')
http = require('http')

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/acceptLogin', (req, res) => {
    dbOperation.acceptLogin(req.body.login, req.body.password).then(r => {
        res.send(r)
    })
})
app.get('/getUsersData', (req, res) => {
    dbOperation.getUsersData().then(r => {
        res.send(r)
    })
})
app.post('/registrationNewUser', (req, res) => {
    dbOperation.registrationNewUser(req.body.name, req.body.login, req.body.password).then(r => {
        res.send(r)
    })
})
app.post('/setResults', (req, res) => {
    dbOperation.setResults(req.body.login, req.body.password, req.body.diagnnumber, req.body.answers).then(r => {
        res.send(r)
    })
})
app.post('/getResults', (req, res) => {
    dbOperation.getResults(req.body.login, req.body.password, req.body.diagnnumber).then(r => {
        res.send(r)
    })
})
app.post('/getCheckLists', (req, res) => {
    dbOperation.getCheckLists(req.body.login, req.body.password).then(r => {
        res.send(r)
    })
})
app.post('/setCheckLists', (req, res) => {
    dbOperation.setCheckLists(req.body.login, req.body.password, req.body.checklist_id, req.body.checklist).then(r => {
        res.send(r)
    })
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))


import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fileUpload from 'express-fileupload'
import http from 'http'
import { errorMiddleware } from './middlewares/error.middleware.js'
import { db } from './model/index.js'
import { router } from './routes/routes.js'
dotenv.config()


const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(cookieParser());
app.use('/api', router)
app.use('/uploads', express.static('uploads'));
app.use(fileUpload)
app.use(errorMiddleware)

const server = http.createServer(app)

const start = async() => {
    try {
        server.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

(async() => { await db.sequelize.sync().then(() => start()) })()