const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const MongoClient = require('mongodb').MongoClient

const port = process.env.PORT || 3000
const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

const app = express()

app.use(express.static(DIST_DIR))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const connectionString = 'mongodb://localhost/RickMorty'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    
    const db = client.db('RickMorty')
    const watched = db.collection('watched')

    app.get('/', (req, res) => {
      res.sendFile(HTML_FILE)
    })
    
    app.get('/db', (req, res) => {
      const cursor = watched.find().toArray()
      .then(results => {
        res.send(results)
      })
      .catch(error => console.error(error))
    })

    app.post('/db', (req, res) => {
        watched.updateOne(
          {"_id": req.body.id},
          {$set: {"watched": !req.body.watched}}  
        ).then(result => {
          res.sendStatus(200)
        })
        .catch(err => {
          res.sendStatus(400)
        })
      })
    
    app.listen(port, function () {
      console.log('App listening on port: ' + port);
    })
  
  })
  .catch(error => console.error(error)) 