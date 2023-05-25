const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const routes = require('./routes/taskRoutes')

const app = express()
const MONGODB_URL = 'mongodb+srv://tasks:MNBVCXZ@cluster0.wobvm1b.mongodb.net/finalProject?retryWrites=true&w=majority'
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(MONGODB_URL)
.then(()=>{console.log('Database connected')})
.catch(error => console.log(error))

app.use('/api', routes)
app.listen(port, ()=>console.log(`Server is listening on port ${port}`))