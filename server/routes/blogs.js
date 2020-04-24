'use strict';
const express = require('express');
const router = express.Router();
const db = require('../middleware/database');

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
        return res.json({
            "status": "success",
            "message": "Blogs List",
            "data": blogs_list
        })
    }catch(error){
        const status_code = error.status_code || 500;
        return res.status(status_code)
            .json({
                "status": "error",
                "error": error.message
            });
    }
})

router.post('/api/blogs', async (req, res) => {
    try {
        let blog_data = req.body;
        //not validation empty values
        blog_data.created = Date.now()/1000;
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