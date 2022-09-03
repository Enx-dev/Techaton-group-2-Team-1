const express = require('express')
const { signUp, login, refreshToken, logout, forgotPassword } = require('../controllers/auth.controller')
const auth = express.Router()


auth.post('/signup' , signUp)
auth.post('/login' , login)
auth.get('/refresh' , refreshToken)
auth.get('/logout' , logout)
auth.get('/forgotPassword', forgotPassword)


module.exports = auth




