import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ReactHtmlParser from 'react-html-parser';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Avatar from '@material-ui/core/Avatar';
const me = require('../images/me.jpeg');
const useStyles = makeStyles((theme) => ({
    root:{
        [theme.breakpoints.down('xs')]: {
            position:'relative',
            top:'-10px',
            left:'10px'
        },
    },
    typography: {
        fontFamily: 'Lato',
        letterSpacing: 1,
        textTransform: 'uppercase',
        padding: 5,
        fontSize: '2rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.5rem',
        },
    },
    headingContainer: {
        position: 'relative',
        borderBottom: '1px solid #ccc',
    },
    date: {
        fontSize: '0.7rem',
        // display: 'inline-block'
    },
    section: {
        fontFamily: 'Lato',
        lineHeight: 2,
        fontWeight: 400,
        maxWidth: '70vw',
        // padding: '1rem',
        letterSpacing: '1px',
        borderBottom: '1px solid #ccc',
        fontSize: '1rem',
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100vw',
            lineHeight: 1.5,
        },
    },
    author: {
        fontFamily: 'Lato',
        marginTop: '1.5rem',
        display: 'flex',
        flexDirection: 'flex-row'
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        cursor: 'pointer',
    },
    info: {
        //   padding:'1rem',
        paddingLeft: '1rem',
        marginLeft: '1rem',
        borderLeft: '1px solid #ccc',

    },
    iconlarge: {
        cursor: 'pointer',
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginRight: 12,
        marginTop: 8,
        color: 'black'
    },
    about: {
        fontFamily: 'Lato',
        lineHeight: '1.5',
        letterSpacing: '1px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem',
            lineHeight: '1.3',
        },
    },
    socialMedia : {
        whiteSpace : 'nowrap'
    }

}));

const BlogContent = (props) => {
    const blog = props.location.state.blog_data;
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <div className={classes.headingContainer}>
                <Typography variant="h4" component="h4" className={classes.typography}>
                    {blog.title}
                    <Typography component="p" color="textSecondary" className={classes.date}>
                        {blog.created}
                    </Typography>
                </Typography>
            </div>
            <section className={classes.section}>
                {ReactHtmlParser(blog.body)}
            </section>
            <div className={classes.author}>
                <a href="https://asim-ansari.herokuapp.com/" target="blank">
                    <Avatar alt="Asim Ansari" src={me} className={classes.large} />
                </a>
                <div className={classes.info}>
                    <Typography component="p" className={classes.about}>
                        Written By: Asim Ansari
                 </Typography>
                    <Typography component="p" color="textSecondary" className={classes.about}>
                        Associate Software Engineer
                 </Typography>
                    <Typography component="p" color="textSecondary" className={classes.about}>
                        inFeedo
                 </Typography>
                    <div className={classes.socialMedia}>
                        <a href="https://www.linkedin.com/in/asim-ansari96/" target="blank"><LinkedInIcon className={classes.iconlarge} /></a>
                        <a href="https://github.com/Asim1996" target="blank"><GitHubIcon className={classes.iconlarge} /></a>
                        <a href="https://twitter.com/asim_ansari7" target="blank"><TwitterIcon className={classes.iconlarge} /></a>
                        <a href="https://www.instagram.com/_asim_96/" target="blank"><InstagramIcon className={classes.iconlarge} /></a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default BlogContent;
