const express = require('express')
const path = require('path')

const blogs = require('../data/blogs')
const router = express.Router()



router.get("/",(req,res) => {
    // res.sendFile(path.join(__dirname,'../templates/index.html')) //Hume blog se bahar aake templates ko dhundna hai isliye ../
    res.render('home');

})

router.get("/blog",(req,res) => {
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
    // res.sendFile(path.join(__dirname,'../templates/bloghome.html')) //Hume blog se bahar aake templates ko dhundna hai isliye ../
    res.render('bloghome',{
        blogs: blogs
    })

})

router.get("/blogpost/:slug",(req,res)=>{ 
    myblog = blogs.filter((e)=>{
        return e.slug == req.params.slug

    })
    console.log(myblog)
    res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
})



module.exports = router