const express = require('express'),
    bodyParser = require("body-parser"),
    dbOperation = require('./dbFiles/dbOperation'),
    cors = require('cors')

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/createNewUser', (req, res) => {
    console.log(req.body)
})
app.post('/acceptLogin', (req, res) => {
    console.log(req.body)
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
    console.log(req.body)
    dbOperation.registrationNewUser(req.body.name, req.body.login, req.body.password).then(r => {
        res.send(r)
    })
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))