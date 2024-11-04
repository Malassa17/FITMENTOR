import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getAllCours() {
    const [result] = await pool.query("SELECT * FROM cours")
    return result 
}

export async function getCours(id){
    const [result] = await pool.query(`
    SELECT * 
    FROM cours 
    WHERE id = ?
    `, [id])
    return result[0]
}

export async function createCours(title,description,img,sport,price,irl,contents){
    const [result] = await pool.query(`
    INSERT INTO cours (title,description,img,sport,price,irl,contents)
    VALUES (?,?,?,?,?,?,?,?)
    `, [title,description,img,sport,price,irl,contents])
    return getCours(result.insertId)
}