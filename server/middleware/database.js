'use strict';

const knex = require('knex');

console.log('db host', process.env.DB_HOST);
console.log('db', process.env.DB_DB);
module.exports = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DB
    },
    // debug: debug,
    pool: {
        min: 0,
        max: 20,
    },
    acquireConnectionTimeout: 3600*1000
});