const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'Beauty5764$',
  post: 5432
})

module.exports = pool
