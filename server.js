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