'use strict';
const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
const multer = require('multer')
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
router.get('/api/blogs/ping', (req, res) => {
    res.send('pong');
})

router.get('/api/blogs/:category', async (req, res) => {
    try {
        const category = req.params.category;
        let select_query = ['id', 'title', 'summary', 'category', 'body', 'created']
        const blogs_list = await db('blogs')
            .select(select_query)
            .where('category', category)
            .orderBy('timestamp', 'desc');
=======
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
router.get('/api/blogs/ping', (req,res)=>{
    res.send('pong');
})

router.get('/api/blogs/:category', async (req,res) => {
    try{
        const category = req.params.category;
        const blogs_list = await db('blogs').select('*').where('category', category);
>>>>>>> fdf4f5ab0f30a161a0dc85aa81a5249523c825ce
        if (blogs_list.length === 0) {
            return res.json({
                "status": "success",
                "message": "Blogs List",
                "data": []
            })
        }
<<<<<<< HEAD

        return res.json({
            "status": "success",
            "message": "Blogs List",
            "data": blogs_list
        })

    } catch (error) {
=======
        setTimeout(()=>{
            return res.json({
                "status": "success",
                "message": "Blogs List",
                "data": blogs_list
            })
        },3000)

    }catch(error){
>>>>>>> fdf4f5ab0f30a161a0dc85aa81a5249523c825ce
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
<<<<<<< HEAD
        if (req.body.secret != process.env.SECRET) {
            return res.status(404).json({
                status: "error",
                message: "Unauthorized"
=======
        if(req.body.secret != process.env.SECRET ){
            return res.status(404).json({
                status:"error",
                message:"Unauthorized"
>>>>>>> fdf4f5ab0f30a161a0dc85aa81a5249523c825ce
            })
        }
        delete req.body.secret;
        let blog_data = req.body;
<<<<<<< HEAD
        blog_data.body = fs.readFileSync(`${req.file.destination}/${req.file.filename}`,
            { encoding: 'utf8', flag: 'r' });

        const now = new Date();
        blog_data.created = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
        blog_data.timestamp = now / 1000;
=======
        blog_data.body = fs.readFileSync(`${req.file.destination}/${req.file.filename}`, 
            {encoding:'utf8', flag:'r'}); 
  
        const  now = new Date();
        blog_data.created = now.getDate()+'/'+(now.getMonth()+1)+'/'+now.getFullYear();
        blog_data.timestamp = now/1000;
>>>>>>> fdf4f5ab0f30a161a0dc85aa81a5249523c825ce
        const blog_id = await db('blogs').insert(blog_data);
        fs.unlinkSync(`${req.file.destination}/${req.file.filename}`);
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
<<<<<<< HEAD
=======

>>>>>>> fdf4f5ab0f30a161a0dc85aa81a5249523c825ce
module.exports = router;