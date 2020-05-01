'use strict';

const knex = require('knex');

module.exports = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || '123456',
        database: process.env.DB_DB || 'dev'
    },
    // debug: debug,
    pool: {
        min: 0,
        max: 20,
    },
    acquireConnectionTimeout: 3600*1000
});