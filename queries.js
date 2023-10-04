const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'belajar-expressjs',
    password: 'root',
    port: '5432',
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM _user ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.params.body 
    /* 
        {
            "name" : "balsaemm",
            "email" : "mail@mail.com"
        }
    */

    pool.query(
        'UPDATE users SET name = $1, email = $2, id = $3', 
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            results.status(200).send(`User updated with ID : ${id}`)
        }
    )
}

const createUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        results.status(200).send(`User with ID: ${id} is deleted`)
    })
}

module.exports = {
    pool,
    getUsers,
};