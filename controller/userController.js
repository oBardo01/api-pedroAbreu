const pool =  require('../config/database')

exports.create = async (req, res) => {
    const { name, document, email, birthday } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO users (name, document, email, birthday) VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, document, email, birthday]
        )
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error(error)
        res.status(500).json({Message: 'peidaro no codigo'})
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM USERS`
        )
        res.status(201).json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({Message: 'peidaro no codigo'})
    }
}

exports.getOne = async (req, res) => {
    const {id} = req.params

    try {
        const result = await pool.query(
            `SELECT * FROM USERS WHERE ID = ${id}`
        )
        if (result.rows.length === 0){
            res.status(400).json({Message: 'Nao encontrado'})
        }
        res.status(201).json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({Message: 'peidaro no codigo'})
    }
}

exports.updateUser = async (req, res) => {
    const {id} = req.params
    const { name, document, email, birthday } = req.body

    try {
        const result = await pool.query(
            `UPDATE USERS SET name = $1, document = $2, email = $3, birthday = $4 WHERE id = $5`
            [name, document, email, birthday]
        )
        if (result.rows.length === 0){
            res.status(400).json({Message: 'Nao encontrado'})
        }
        res.status(201).json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({Message: 'peidaro no codigo'})
    }
}

exports.deleteUser = async (req, res) => {
    const {id} = req.params

    try {
        const result = await pool.query(
            `DELETE FROM USERS WHERE id = ${id}`
        )
        if (result.rows.length === 0){
            res.status(400).json({Message: 'Nao encontrado'})
        }
        res.status(201).json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({Message: 'peidaro no codigo'})
    }
}