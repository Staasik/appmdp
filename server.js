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
    dbOperation.getMaxUserId().then(r => {
        let UserId = r.recordsets[0][0].max + 1
        dbOperation.insertCustomers(UserId, req.body.f, req.body.i, req.body.o, req.body.phone, req.body.username, req.body.password, req.body.birthday, req.body.email, req.body.date).then(r => {
                res.send(r)
            })
            .catch(er => {
                res.send(er)
            })
    })
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

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`))