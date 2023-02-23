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