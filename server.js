if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//imports initialization
const express = require('express');
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

// Getting the controller paths
const indexRouter = require("./routes/index")
const authorRouter = require("./routes/authors")

//use of import libraries
app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.set("layout","layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))
app.use(bodyParser.urlencoded({limit:"10mb",extended:false}))

// model initialization
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{family: 4})
 const db = mongoose.connection 
 db.on('error',error => console.error(error))
 db.once('open',() => console.log("Connection Succesful Master Ayo"))

 //router initialization
app.use('/',indexRouter)
app.use('/authors',authorRouter)

app.listen(process.env.PORT || 6969)

