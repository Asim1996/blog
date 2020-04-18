const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const db = require('./middleware/database');


const app = express();
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/ping',(req,res)=>{
return res.send("pong")
})

app.use(require('./routes/blogs'));


app.post('/api/blogs', async (req, res) => {
    try {
        let blog_data = req.body;
        const blog_id = await db('blogs').insert(blog_data);
        console.log(blog_id);
        return res.json({
            status: "success",
            data: {
                blog_id: blog_id[0]
            }
        })
    } catch(error){
        const status_code = error.status_code || 500;
        return res.status(status_code)
            .json({
                "status": "error",
                "error": error.message
            });
    }
})

module.exports = app;