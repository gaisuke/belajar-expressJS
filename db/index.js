var fs = require('fs')
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'belajar-expressjs',
    password: 'root',
    port: '5432',
})

const seedQuery = fs.readFileSync('db/seeding.sql', { encoding: 'utf8' })
pool.query(seedQuery, (err, res) => {
    console.log(err, res)
    console.log('Seeding Completed!')
    pool.end()
})