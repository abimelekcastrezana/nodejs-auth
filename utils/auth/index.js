const passport = require('passport');

const localStrategy = require('./strategies/local.strategy');

passport.use(localStrategy);

const JwtStrategy = require('./strategies/jwt.estrategy');

passport.use(JwtStrategy);
