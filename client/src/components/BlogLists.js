import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BlogListItem from "./BlogListItem";



const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        textAlign: 'center',
        marginBottom:'1rem'
    },
    image: {
        width: '96px',
        height: '96px'
    }
}));

export default function BlogLists(props) {
    const classes = useStyles();
    const blogs = props.blogs_list;
    return (
        <div>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={require(`../images/${props.category_image}.png`)} />
            </div>
            {
                blogs.length > 0 ? blogs.map((blog) => {
                    return <BlogListItem key={blog.id} blog_data={blog} />
                })
                    : "Still writing..."
            }
        </div>
    )
}