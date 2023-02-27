const express = require("express")
const router = express.Router()
const Author = require('../models/author')

// Get all Authors
router.get('/',(req,res) =>{
    res.render("authors/index")
})

// New Author page
router.get('/new',(req,res) =>{
    res.render("authors/new",{author : new Author()})
})

// Create New Author
router.post('/',(req,res) =>{
    res.send(req.body.name)

})

module.exports = router