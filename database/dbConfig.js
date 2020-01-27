const knex = require('knex');

const dbConfig = require('../knexfile.js');

const environment = process.env.NODE_ENV || 'dev';

module.exports = knex(dbConfig[environment]);

// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// module.exports = knex(knexConfig.development);
