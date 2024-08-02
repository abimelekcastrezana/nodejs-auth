const passport = require('passport-jwt');

const JwtStrategy = require('./strategies/jwt.estrategy');

passport.use(JwtStrategy);
