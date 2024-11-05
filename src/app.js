import express from 'express'
import {getCours, getAllCours, createCours, getCoursBySport, createClient, getClient, getCommentaire, getCoach, createCoach, getAllCommentaires} from './database.js'

const app = express()

app.use(express.json())

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

//TODO get /favoris ; get /mescours ; get /cours/:id/contenu

/////////////////METHODES POST////////////////////////////

app.post("/cours", async (req,res) => {
    const {title,description,img,sport,price,irl,coach} = req.body
    const cours = await createCours(title,description,img,sport,price,irl,coach)
    res.status(201).send(cours) 
})

app.post("/client", async (req,res) => {
    const {identifier,pass} = req.body
    const client = await createClient(identifier,pass)
    res.status(201).send(client) 
})

app.post("/coach", async (req,res) => {
    const {identifier,pass,mail,tel,cours} = req.body
    const coach = await createCoach(identifier,pass,mail,tel,cours)
    res.status(201).send(coach) 
})

app.post("/cours/comments", async (req,res) => {
    const {identifier,pass,mail,tel,cours} = req.body
    const coach = await createCoach(identifier,pass,mail,tel,cours)
    res.status(201).send(coach) 
})

//TODO post /favoris ; post /mescours ; post /cours/:id/contenu

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Error")
})

app.listen(8080, () => {
    console.log("Server running on port 8080")
})