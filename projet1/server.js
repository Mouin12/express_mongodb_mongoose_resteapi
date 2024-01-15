const express=require('express')
const dbconnect=require('./config/db-connect')
require('dotenv').config()

//initialisation

const app =express()

//connexion dase de données

dbconnect()

//ceartion midellware
app.use(express.json())
app.use(('/client'),require('./routes/client'))
app.use(('/product'),require('./routes/product'))

//creation serveur

app.listen(process.env.PORT,(err)=> err? console.log(err):console.log(`server is running in ${process.env.PORT}`))