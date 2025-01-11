import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

/*Pool de connexions mysql, gère les connexions à la base de donnée.
  Les identifiants sont personnels et stockés dans un fichier .env qui n'est pas présent dans le git.
  Lors du déploiement pour le client nous fourirront un moyen de connection pour que la base soit utilisable.
  Dans cette livraison il n'est donc pas possible de faire la connexion avec la base de donnée. */
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

//////////METHODES GET///////////////////////////
/*Dans cette section se trouvent les méthode dites get -> qui font des selects sur les éléments qui nous intéressent */

/*Get tous les cours */
export async function getAllCours() {
    const [result] = await pool.query("SELECT * FROM cours")
    return result 
}

/*Get tous les commentaires d'un cours */
export async function getAllCommentaires(idCours) {
    const [result] = await pool.query("SELECT * FROM commentaires WHERE cours = ?",[idCours])
    return result 
}

/*Get un cours en particulier */
export async function getCours(id){
    const [result] = await pool.query(`
    SELECT * 
    FROM cours 
    WHERE id = ?
    `, [id])
    return result[0]
}

/*Get les cours correspondant à un sport en particulier */
export async function getCoursBySport(sport){
    const [result] = await pool.query(`
    SELECT *
    FROM cours
    WHERE sport = ?
    `, [sport])
    return result
}

/*Get un client en particulier */
export async function getClient(id){
    const [result] = await pool.query(`
    SELECT *
    FROM clients
    WHERE id = ?
    `, [id])
    return result[0]
}

/*Get un client en fonction de son identifiant */
export async function getClientByIdentifier(identifier){
    const [result] = await pool.query(`
    SELECT *
    FROM clients
    WHERE identifier = ?
    `, [identifier])
    return result[0]
}

/*Get un coach */
export async function getCoach(id){
    const [result] = await pool.query(`
    SELECT *
    FROM coach
    WHERE id = ?
    `, [id])
    return result[0]
}

/*Get un commentaire un particulier sur un cours */
export async function getCommentaire(id,idCours){
    const [result] = await pool.query(`
    SELECT comment
    FROM commentaires
    WHERE id = ?
    AND cours = ?
    `, [id,idCours])
    return result[0]
}

/*Get un favoris en particulier d'un client */
export async function getFavoris(id,idClient){
    const [result] = await pool.query(`
    SELECT cours
    FROM favoris
    WHERE client = ?
    AND id = ?
    `, [idClient,id])
    return result[0]
}

/*Get tous les favoris d'un client */
export async function getAllFavoris(idClient){
    const [result] = await pool.query(`
    SELECT *
    FROM favoris,cours
    WHERE client = ?
    AND cours = cours.id
    `, [idClient])
    return result
}

/*Get un cours acheté en particulier d'un client */
export async function getObtenus(id,idClient){
    const [result] = await pool.query(`
    SELECT *
    FROM obtenus
    WHERE client = ?
    AND cours = ?
    `, [idClient, id])
    return result[0]
}

/*Get tous les cours achetés d'un client */
export async function getAllObtenus(idClient){
    const [result] = await pool.query(`
    SELECT *
    FROM obtenus,cours
    WHERE client = ?
    AND cours = cours.id
    `, [idClient])
    return result
}

/*Get tous les contenus d'un cours */
export async function getContenus(idCours){
    const [result] = await pool.query(`
    SELECT content
    FROM contenus
    WHERE cours = ?
    `, [idCours])
    return result
}

//////////METHODES CREATE///////////////////////////
/*Dans cette sections se trouvent les méthodes dites create -> qui font des inserts des éléments crées */

/*Create un cours */
export async function createCours(title,description,img,sport,price,irl,coach){
    const [result] = await pool.query(`
    INSERT INTO cours (title,description,img,sport,price,irl,coach)
    VALUES (?,?,?,?,?,?,?)
    `, [title,description,img,sport,price,irl,coach])
    return getCours(result.insertId)
}

/*Create un client */
export async function createClient(identifier,pass){
    const [result] = await pool.query(`
    INSERT INTO clients (identifier,pass)
    VALUES (?,?)
    `, [identifier,pass])
    return getClient(result.insertId)
}

/*Create un coach */
export async function createCoach(identifier,pass,mail,tel){
    const [result] = await pool.query(`
    INSERT INTO coach (identifier,pass,mail,tel)
    VALUES (?,?,?,?)
    `, [identifier,pass,mail,tel])
    return getCoach(result.insertId)
}

/*Create un commentaire */
export async function createCommentaire(comment,cours){
    const [result] = await pool.query(`
    INSERT INTO commentaires (comment,cours)
    VALUES (?,?)
    `, [comment,cours])
    return getCommentaire(result.insertId,result.cours)
}

/*Create un favoris */
export async function createFavoris(client,cours){
    const [result] = await pool.query(`
    INSERT INTO favoris (client,cours)
    VALUES (?,?)
    `, [client,cours])
    return getFavoris(result.insertId,result.client)
}

/*Create un cours acheté */
export async function createObtenus(client,cours){
    const [result] = await pool.query(`
    INSERT INTO obtenus (client,cours)
    VALUES (?,?)
    `, [client,cours])
    return getObtenus(result.insertId,result.client)
}

/*Create un contenu */
export async function createContenus(content,cours){
    const [result] = await pool.query(`
    INSERT INTO contenus (content,cours)
    VALUES (?,?)
    `, [content,cours])
    return getContenus(result.cours)
}