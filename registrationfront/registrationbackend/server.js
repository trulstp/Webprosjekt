const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const schema = require('./models/RegistrationModels')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

app.get('/students', async (req, res) => {
    try {
        const showTables = await schema.find()
        res.json(showTables)
        console.log(showTables)
    }
    catch(err){
        res.json({message:err})
    }
})

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, () => console.log("server is up and running")) 