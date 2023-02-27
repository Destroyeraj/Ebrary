const express = require("express")
const router = express.Router()
const Author = require('../models/author')

// Get all Authors
router.get('/', async (req,res) =>{
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== "") {
        searchOptions.name = new RegExp(req.query.name,'i')
    }
    try {
        const allAuthors = await Author.find(searchOptions)
        res.render("authors/index",{authors: allAuthors , searchOptions : req.query})
    } catch  {
        res.redirect('/')
    }

})

// New Author page
router.get('/new',(req,res) =>{
    res.render("authors/new",{author : new Author()})
})

// Create New Author
router.post('/',async (req,res) =>{
    
    author = new Author({
        name : req.body.name
    })
    try {
      const newAuthor = await author.save()
      res.redirect(`authors`)
    } catch  {
     res.render("authors/new",{author : author, errMessage : "Error Creating Author"})
    }
   

})

module.exports = router