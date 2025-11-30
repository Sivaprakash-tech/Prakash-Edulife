const sequelize = require('../config/db');
const User = require('./user');
const Course = require('./course');
module.exports = { sequelize, User, Course };
