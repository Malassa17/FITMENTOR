import express from 'express'
import bcrypt from 'bcrypt'
import cors from 'cors'
import {getCours, getAllCours, createCours, getCoursBySport, createClient, getClient, getCommentaire, getCoach, createCoach, getAllCommentaires, createCommentaire, getAllFavoris, getFavoris, createFavoris, getAllObtenus, getObtenus, createObtenus, getContenus, createContenus, getClientByIdentifier} from './database.js'

/*Point d'entrée de l'application.
  Ici on retrouve la mise en place du serveur express basé sur node.js ainsi que les routes qui constituent le back-end de l'application. */

const app = express()

app.use(express.json())
app.use(express.static('dist'))
app.use(cors())

/////////////////METHODES GET////////////////////////////
/*Dans cette section on retrouve les méthodes get au sens GET du protocole HTTP, elles s'appuient sur les méthodes get de database.js  
  Elle font aussis office de routes pour accéder aux différentes ressources. 
  Ce travail peut encore changer l'état/le résultat/le nom de certaines routes, il n'est pas encore définitif. */

/*Page avec tous les cours */
app.get("/cours", async (req,res) => {
    const cours = await getAllCours()
    res.send(cours)
})

/*Page d'un cours en particulier */
app.get("/cours/:id", async (req,res) => {
    const id = req.params.id
    const cours = await getCours(id)
    res.send(cours)
})

/*Page des cours d'un sport en particulier */
app.get("/cours/sport/:sport", async (req,res) => {
    const sport = req.params.sport
    const cours = await getCoursBySport(sport)
    res.send(cours)
})

/*Page d'un client */
app.get("/client/:id", async (req,res) => {
    const id = req.params.id
    const client = await getClient(id)
    res.send(client)
})

/*Page d'un coach */
app.get("/coach/:id", async (req,res) => {
    const id = req.params.id
    const coach = await getCoach(id)
    res.send(coach)
})

/*Un commentaire d'un cours */
app.get("/cours/:idCours/comments/:id", async (req,res) => {
    const id = req.params.id
    const idCours = req.params.idCours
    const comment = await getCommentaire(id,idCours)
    res.send(comment)
})

/*Tous les commentaires d'un cours */
app.get("/cours/:idCours/comments", async (req,res) => {
    const idCours = req.params.idCours
    const comments = await getAllCommentaires(idCours)
    res.send(comments)
})

/*Un favoris d'un client */
app.get("/client/:idClient/favoris/:id", async (req,res) => {
    const id = req.params.id
    const idClient = req.params.idClient
    const favs = await getFavoris(id,idClient)
    res.send(favs)
})

/*Page de tous les favoris d'un client */
app.get("/client/:idClient/favoris", async (req,res) => {
    const idClient = req.params.idClient
    const favs = await getAllFavoris(idClient)
    res.send(favs)
})

/*Un cours acheté d'un client */
app.get("/client/:idClient/mescours/:id", async (req,res) => {
    const id = req.params.id
    const idClient = req.params.idClient
    const obtenus = await getObtenus(id,idClient)
    res.send(obtenus)
})

/*Page de tous les cours achetés d'un client */
app.get("/client/:idClient/mescours", async (req,res) => {
    const idClient = req.params.idClient
    const obtenus = await getAllObtenus(idClient)
    res.send(obtenus)
})

/*Tous les contenus d'un cours */
app.get("/mescours/content/:idCours", async (req,res) => {
    const idCours = req.params.idCours
    const content = await getContenus(idCours)
    res.send(content)
})

/////////////////METHODES POST////////////////////////////
/*Dans cette section on retrouve les méthodes post au sens POST du protocole HTTP, elles s'appuient sur les méthodes create de database.js */

/*Post un cours */
app.post("/cours", async (req,res) => {
    const {title,description,img,sport,price,irl,coach} = req.body
    const cours = await createCours(title,description,img,sport,price,irl,coach)
    res.status(201).send(cours) 
})

/*Post un client */
app.post("/signup", async (req,res) => {
    const {identifier,pass} = req.body
    const id = await getClientByIdentifier(identifier)
    if (id !== null){
        throw new Error("Username already exists")
    }
    else{
        const hash = await bcrypt.hash(pass, 13)
        const client = await createClient(identifier,hash)
        res.status(201).send(client) 
    }
})

/*Test du login */
app.post('/login', async (req,res) => {
    const {identifier, pass} = req.body
    const client = await getClientByIdentifier(identifier)
    const isUsernameFound = identifier === client.identifier //Not working at that time (client appears to be undefined yet, but defined for bcrypt.compare)
    if (!isUsernameFound){
        res.send("Username not found")
        return
    }
    const isValid = await bcrypt.compare(pass, client.pass)
    if (!isValid){
        res.send("Wrong password")
        return
    }

    var id = client.id
    var identity = client.identifier
    var text = "Credentials ok, connecting ..."
    res.send([id,identity,text])
})

/*Post un coach */
app.post("/coach", async (req,res) => {
    const {identifier,pass,mail,tel} = req.body
    const coach = await createCoach(identifier,pass,mail,tel)
    res.status(201).send(coach) 
})

/*Post un commentaire */
app.post("/cours/comments", async (req,res) => {
    const {comment,cours} = req.body
    const com = await createCommentaire(comment,cours)
    res.status(201).send(com) 
})

/*Post un favoris */
app.post("/client/favoris", async (req,res) => {
    const {client,cours} = req.body
    const fav = await createFavoris(client,cours)
    res.status(201).send(fav)
})

/*Post un cours acheté */
app.post("/client/mescours", async (req,res) => {
    const {client,cours} = req.body
    const obtenus = await createObtenus(client,cours)
    res.status(201).send(obtenus)
})

/*Post un contenus */
app.post("/mescours/content", async (req,res) => {
    const {content,cours} = req.body
    const contenus = await createContenus(content,cours)
    res.status(201).send(contenus)
})

/*Utilisation de la console pour rediriger l'information en cas d'erreur */
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Error")
})

/*Ecoute sur le port donné par le déploiement, par défaut écoute sur le port 8080*/
app.listen(process.env.PORT || 8080, () => {
    console.log("Server running on port 8080")
})