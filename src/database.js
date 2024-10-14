import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'fitmentor_DB'
}).promise()

async function getRowsCours() {
    const [result] = await pool.query("SELECT * FROM cours")
    return result 
}

const cours = await getRowsCours()
console.log(cours)