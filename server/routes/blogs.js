'use strict';
const express = require('express');
const router = express.Router();
// const redis = require('redis');
// const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
const multer = require('multer')
const fs = require('fs');
const db = require('../middleware/database');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp')
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

    } catch (error) {
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
        if (req.body.secret != process.env.SECRET) {
            return res.status(404).json({
                status: "error",
                message: "Unauthorized"
            })
        }
        delete req.body.secret;
        let blog_data = req.body;
        blog_data.body = fs.readFileSync(`${req.file.destination}/${req.file.filename}`,
            { encoding: 'utf8', flag: 'r' });

        const now = new Date();
        blog_data.created = now.getDate() + '/' + (now.getMonth() + 1) + '/' + now.getFullYear();
        blog_data.timestamp = now / 1000;
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
module.exports = router;