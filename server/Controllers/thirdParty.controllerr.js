const GoogleStrategy = require('passport-oauth2').Strategy
const passport = require('passport')

passport.use(
    new GoogleStrategy {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        scope: ['profile', 'email']
    },
    
)