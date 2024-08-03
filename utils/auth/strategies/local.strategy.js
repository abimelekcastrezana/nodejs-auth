const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');

const UserService = require('./../../../services/user.service');

const service = new UserService();

const localStrategy = new Strategy(async (username, password, done) => {
  try {
    const user = await service.findByEmail(email);
    if (!user) {
      done(boom.unauthorized(), false);
    }
    if (!)
  } catch (error) {
    done(error, false);
  }
});

module.exports = localStrategy;
