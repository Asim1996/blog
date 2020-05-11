import React from 'react'
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import BlogListItem from "./BlogListItem";



const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        textAlign: 'center',
        marginBottom: '1rem'
    },
    image: {
        width: '96px',
        height: '96px'
    }
}));

export default function BlogLists(props) {
    const classes = useStyles();
    const blogs = props.blogs_list;
    const meta_object = {
        "Javascript": "JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
        "Node": "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.",
        "React": "React is a JavaScript library for building user interfaces",
        "Aws": "Amazon Web Services (AWS) is a secure cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow",
        "Systemdesign": "Systems design is the process of defining the architecture, modules, interfaces, and data for a system to satisfy specified requirements."
    }
    return (
        <div>
            <Helmet>
                <title>{`404 Found | ${props.category_image}`}</title>
                <meta name="description" content={`${meta_object[props.category_image]}`} />
                <meta name="keywords" content={props.category_image} />

            </Helmet>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={require(`../images/${props.category_image}.png`)} alt={props.category_image} />
            </div>
            {
                blogs.length > 0 ? blogs.map((blog) => {
                    return <BlogListItem key={blog.id} blog_data={blog} />
                })
                    : (<h3>Still writing...</h3>)
            }

        </div>
    )
}