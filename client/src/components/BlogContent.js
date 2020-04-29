import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ReactHtmlParser from 'react-html-parser';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    typography:{
        borderBottom: '1px solid #ccc',
        fontFamily:'Lato',
        letterSpacing:1,
        textTransform:'uppercase',
        padding:5
    },
    date:{
        fontSize:12,
        textAlign:'right'
    },
    section:{
        fontFamily:'Lato',
        lineHeight:2,
        fontWeight:400
    },
    blockquote:{
        background:'white',
        padding:5
    }
}));

const BlogContent = (props) => {
    const blog = props.location.state.blog_data;
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" component="h4" className={classes.typography}>
                {blog.title}
                {/* <div className={classes.date}> */}
                    <Typography  variant="span" component="span" color="textSecondary" className={classes.date}>
                        {blog.created}
                    </Typography>
                   {/* </div>  */}
            </Typography>
            <section className = {classes.section}>
                {ReactHtmlParser(blog.body)}
            </section>
        </Container>
    )
}

export default BlogContent;
