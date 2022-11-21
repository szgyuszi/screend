const {pool} = require('../../config/databaseConfig')
const {rows} = require("pg/lib/defaults");

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {name, email, password, img} = request.body

    pool.query('INSERT INTO users (name, email, password, img) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, password, img], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

const loginUser = (request, response) => {
   const {username, password} = request.body;

    pool.query('SELECT id, name, email FROM users WHERE name=$1 and password=$2', [username, password], (error, results) => {
        if (error) {
            response.status(404).send('Username or password incorrect')
        } else {

            response.status(200).send(results.rows)
        }
    })
}

module.exports = {
    getUserById,
    createUser,
    deleteUser,
    loginUser,
}
