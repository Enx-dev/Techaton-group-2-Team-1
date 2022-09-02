const express = require('express')
const { signUp, login, refreshToken, logout } = require('../Controllers/auth.controller')
const auth = express.Router()


auth.post('/signup' , signUp)
auth.post('/login' , login)
auth.get('/refresh' , refreshToken)
auth.get('/logout' , logout)


module.exports = auth




