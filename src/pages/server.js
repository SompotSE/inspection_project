const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const morgan = require('morgan')
const mysql = require('mysql')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./'))

app.use(morgan('short'))

function getConnection()
{
    return mysql.createConnection({
        host: "192.168.33.10",
        user: "root",
        password: "manager",
        database: "inspection"
    })
}

app.post('/location_create',(req,res) =>{
    console.log("Trying to create a new location...")
    console.log("How do we get the form data???")
    console.log("Name TOR: " + req.body.create_NameTOR)
    console.log("Address: " + req.body.create_Address)
    const NameTOR = req.body.create_NameTOR
    const Address = req.body.create_Address
    const Latitude = req.body.create_Latitude
    const Longitude = req.body.create_Longitude
    const queryString = "INSERT INTO location (name, address, latitude, longitude) VALUES (?, ?, ?, ?)"
    getConnection().query(queryString,[NameTOR, Address, Latitude, Longitude], (err, results, fields) =>{
        if(err){
            console.log("Failed to insert new location: "+ err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new location with id:", results.insertedID)
        res.end()
    })
    res.end()
})

app.get('/location/:id',(req,res) =>{
    console.log("Fetching location with id:" + req.params.id)
    const con = getConnection()
    const locationID = req.params.id
    const queryString = "SELECT * FROM location WHERE id =?"
    con.query(queryString,[locationID],(err,rows,fields) =>{
        if(err)
        {
            console.log("Failed to queery for location: "+ err)
            res.sendStatus(500)
            return
        }
        console.log("I think we fetched location successfully")
        const location1 = rows.map((row) =>{
            return {latitude: row.latitude,longitude: row.longitude}
        })
        res.json(location1)
    })
})

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from Sompot")
})

app.get("/Text", (req, res, next) => {
    const con = getConnection()
    const queryString = "SELECT * FROM location"
    con.query(queryString,(err,rows,fields) =>{
    if(err)
    {
        console.log("Failed to queery for location: "+ err)
        res.sendStatus(500)
        return
    }
    res.json(rows)
    })
    con.end()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})