import express from 'express'
import bcrypt from 'bcrypt'
import {getCours, getAllCours, createCours, getCoursBySport, createClient, getClient, getCommentaire, getCoach, createCoach, getAllCommentaires, createCommentaire, getAllFavoris, getFavoris, createFavoris, getAllObtenus, getObtenus, createObtenus, getContenus, createContenus, getClientByIdentifier} from './database.js'

const app = express()

app.use(express.json())

//TODO REMPLACER idClient par GETCURRENTIDCLIENT !!!!!!!!!!!!!!!!!!!!!

/////////////////METHODES GET////////////////////////////

app.get("/cours", async (req,res) => {
    const cours = await getAllCours()
    res.send(cours)
})

app.get("/cours/:id", async (req,res) => {
    const id = req.params.id
    const cours = await getCours(id)
    res.send(cours)
})

app.get("/cours/sport/:sport", async (req,res) => {
    const sport = req.params.sport
    const cours = await getCoursBySport(sport)
    res.send(cours)
})

app.get("/client/:id", async (req,res) => {
    const id = req.params.id
    const client = await getClient(id)
    res.send(client)
})

app.get("/coach/:id", async (req,res) => {
    const id = req.params.id
    const coach = await getCoach(id)
    res.send(coach)
})

app.get("/cours/:idCours/comments/:id", async (req,res) => {
    const id = req.params.id
    const idCours = req.params.idCours
    const comment = await getCommentaire(id,idCours)
    res.send(comment)
})

app.get("/cours/:idCours/comments", async (req,res) => {
    const idCours = req.params.idCours
    const comments = await getAllCommentaires(idCours)
    res.send(comments)
})

app.get("/client/:idClient/favoris/:id", async (req,res) => {
    const id = req.params.id
    const idClient = req.params.idClient
    const favs = await getFavoris(id,idClient)
    res.send(favs)
})

app.get("/client/:idClient/favoris", async (req,res) => {
    const idClient = req.params.idClient
    const favs = await getAllFavoris(idClient)
    res.send(favs)
})

app.get("/client/:idClient/mescours/:id", async (req,res) => {
    const id = req.params.id
    const idClient = req.params.idClient
    const obtenus = await getObtenus(id,idClient)
    res.send(obtenus)
})

app.get("/client/:idClient/mescours", async (req,res) => {
    const idClient = req.params.idClient
    const obtenus = await getAllObtenus(idClient)
    res.send(obtenus)
})

app.get("/mescours/content/:idCours", async (req,res) => {
    const idCours = req.params.idCours
    const content = await getContenus(idCours)
    res.send(content)
})

/////////////////METHODES POST////////////////////////////

app.post("/cours", async (req,res) => {
    const {title,description,img,sport,price,irl,coach} = req.body
    const cours = await createCours(title,description,img,sport,price,irl,coach)
    res.status(201).send(cours) 
})

app.post("/signup", async (req,res) => {
    const {identifier,pass} = req.body
    const hash = await bcrypt.hash(pass, 13)
    const client = await createClient(identifier,hash)
    res.status(201).send(client) 
})

app.post('/login', async (req,res) => {
    const {identifier, pass} = req.body
    const client = await getClientByIdentifier(identifier)
    const isUsernameFound = identifier === client.identifier //Not working at that time
    if (!isUsernameFound){
        res.send("Username not found")
        return
    }
    const isValid = await bcrypt.compare(pass, client.pass)
    if (!isValid){
        res.send("Wrong password")
        return
    }

    res.send("Credentials ok, connecting ...")
})

app.post("/coach", async (req,res) => {
    const {identifier,pass,mail,tel} = req.body
    const coach = await createCoach(identifier,pass,mail,tel)
    res.status(201).send(coach) 
})

app.post("/cours/comments", async (req,res) => {
    const {comment,cours} = req.body
    const com = await createCommentaire(comment,cours)
    res.status(201).send(com) 
})

app.post("/client/favoris", async (req,res) => {
    const {client,cours} = req.body
    const fav = await createFavoris(client,cours)
    res.status(201).send(fav)
})

app.post("/client/mescours", async (req,res) => {
    const {client,cours} = req.body
    const obtenus = await createObtenus(client,cours)
    res.status(201).send(obtenus)
})

app.post("/mescours/content", async (req,res) => {
    const {content,cours} = req.body
    const contenus = await createContenus(content,cours)
    res.status(201).send(contenus)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Error")
})

app.listen(8080, () => {
    console.log("Server running on port 8080")
})