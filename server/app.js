require('dotenv').config()
const express = require("express")
const cors = require("cors")
const morgan = require('morgan')
const { notFound, errorHandler } = require("./Middlewares/error.middleware")
const routes = require('./Routes/index.route')
const { config } = require("./Config/index")
const cookieParser = require('cookie-parser')


const app = express()

//Third-party middleswares
app.use(cors())
app.use(morgan("dev"))
app.use(cookieParser())

//Built-in middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//The Routes
app.use(routes)

//API Welcome Message
app.use("/api/protrack", (req, res) => {
    res.send({
      msg: `Yah.....Welcome to ${config.APP_NAME} API ✔🎈🎉✨ Created by Group 2, Team 1`
    })
  })

app.all('*', notFound)
app.use(errorHandler) 


module.exports = app

