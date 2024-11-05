import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

//////////METHODES GET///////////////////////////

export async function getAllCours() {
    const [result] = await pool.query("SELECT * FROM cours")
    return result 
}

export async function getAllCommentaires(idCours) {
    const [result] = await pool.query("SELECT * FROM commentaires WHERE cours = ?",[idCours])
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

export async function getCoursBySport(sport){
    const [result] = await pool.query(`
    SELECT *
    FROM cours
    WHERE sport = ?
    `, [sport])
    return result
}

export async function getClient(id){
    const [result] = await pool.query(`
    SELECT *
    FROM clients
    WHERE id = ?
    `, [id])
    return result[0]
}

export async function getCoach(id){
    const [result] = await pool.query(`
    SELECT *
    FROM coach
    WHERE id = ?
    `, [id])
    return result[0]
}

export async function getCommentaire(id,idCours){
    const [result] = await pool.query(`
    SELECT comment
    FROM commentaires
    WHERE id = ?
    AND cours = ?
    `, [id,idCours])
    return result[0]
}

export async function getFavoris(id,idClient){
    const [result] = await pool.query(`
    SELECT cours
    FROM favoris
    WHERE client = ?
    AND id = ?
    `, [idClient,id])
    return result[0]
}

export async function getAllFavoris(idClient){
    const [result] = await pool.query(`
    SELECT cours
    FROM favoris
    WHERE client = ?
    `, [idClient])
    return result
}

//TODO getObtenus etc... et getContenus etc...

//////////METHODES CREATE///////////////////////////

export async function createCours(title,description,img,sport,price,irl,coach){
    const [result] = await pool.query(`
    INSERT INTO cours (title,description,img,sport,price,irl,coach)
    VALUES (?,?,?,?,?,?,?)
    `, [title,description,img,sport,price,irl,coach])
    return getCours(result.insertId)
}

export async function createClient(identifier,pass){
    const [result] = await pool.query(`
    INSERT INTO clients (identifier,pass)
    VALUES (?,?)
    `, [identifier,pass])
    return getClient(result.insertId)
}

export async function createCoach(identifier,pass,mail,tel,cours){
    const [result] = await pool.query(`
    INSERT INTO clients (identifier,pass,mail,tel,cours)
    VALUES (?,?,?,?,?)
    `, [identifier,pass,mail,tel,cours])
    return getCoach(result.insertId)
}

export async function createCommentaire(comment,cours){
    const [result] = await pool.query(`
    INSERT INTO commentaires (comment,cours)
    VALUES (?,?)
    `, [comment,cours])
    return getCommentaire(result.insertId)
}

export async function createFavoris(client,cours){
    const [result] = await pool.query(`
    INSERT INTO favoris (client,cours)
    VALUES (?,?)
    `, [client,cours])
    return getFavoris(result.insertId,result.client)
}

//TODO createObtenus et createContenus