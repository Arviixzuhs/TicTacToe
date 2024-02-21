import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { Server } from 'socket.io'
import bodyParser from 'body-parser'
import socketEvents from './socketEvents'
import express, { Application } from 'express'
dotenv.config()

const app: Application = express()
app.set('port', process.env.PORT)

app.use(
  cors({
    origin: process.env.FRONT_URL,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
)

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: process.env.FRONT_URL,
  },
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

socketEvents(io)

server.listen(app.get('port'), () => {
  console.log(`Server en el puerto ${app.get('port')}`)
})
