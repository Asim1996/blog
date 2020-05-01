'use strict';
const express = require('express');
const router = express.Router();
const multer  = require('multer')
const fs = require('fs'); 
const db = require('../middleware/database');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-blogs')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
const upload = multer({ storage: storage })
router.get('/api/blogs/:category', async (req,res) => {
    try{
        const category = req.params.category;
        const blogs_list = await db('blogs').select('*').where('category', category);
        if (blogs_list.length === 0) {
            return res.json({
                "status": "success",
                "message": "Blogs List",
                "data": []
            })
        }
        setTimeout(()=>{
            return res.json({
                "status": "success",
                "message": "Blogs List",
                "data": blogs_list
            })
        },3000)

    }catch(error){
        const status_code = error.status_code || 500;
        return res.status(status_code)
            .json({
                "status": "error",
                "error": error.message
            });
    }
})

router.post('/api/blogs', upload.single('blogfile'), async (req, res) => {
    try {
        console.log(req.file);
        let blog_data = req.body;
        blog_data.body = fs.readFileSync(`${req.file.destination}/${req.file.filename}`, 
            {encoding:'utf8', flag:'r'}); 
  
        //not validation empty values
        // blog_data.created = Date.now()/1000;
        const  now = new Date();
        blog_data.created = now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear();
        const blog_id = await db('blogs').insert(blog_data);
        // console.log(blog_id);
        return res.json({
            status: "success",
            data: {
                blog_id: blog_id[0]
            }
        })
    } catch (error) {
        const status_code = error.status_code || 500;
        return res.status(status_code)
            .json({
                "status": "error",
                "error": error.message
            });
    }
})

module.exports = router;