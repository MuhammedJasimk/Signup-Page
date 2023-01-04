const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const cookieParser =require('cookie-parser')
const session = require('express-session')
const connection = require('./db')
const userRouter = require('./routes/user')

connection()

app.use(cors())
app.use(express.json()) 


app.use('/api/user',userRouter)

app.listen(process.env.PORT,()=>console.log(`listening on port ${process.env.PORT}`));