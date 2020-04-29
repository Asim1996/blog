import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import constants from "../constants";
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        position: "relative",
        cursor: 'pointer',
        minWidth: 200,
        borderRadius: 15,
        boxShadow: '0 1.5rem 4rem rgba(0,0,0,0.15)',
        marginBottom: 25,
        transition: 'transform .3s',
        '&:hover': {
            transform: 'translateY(-1.1rem) scale(1.03)'
        },
        '&::before': {
            content: "'\\201C'",
            position: "absolute",
            top: "-1rem",
            left: "-0.2rem",
            fontSize: '13rem',
            lineHeight: 1,
            color: "#f4f2f2",
            zIndex: 1
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 700,
        textTransform: 'uppercase'

    },
    pos: {
        marginBottom: 12,
        textAlign: 'center',
    },
    date: {
        fontWeight: 200,
        textAlign: 'right'
    }
});

function BlogListItem(props) {
    const classes = useStyles();
    function navigatePage() {
        const title = props.blog_data.title.replace(/[^A-Z0-9]+/ig, "-");
        props.history.push({
            pathname: `/${constants.BLOGS_CATEGORY[props.blog_data.category]}/${title}`,
            state: { blog_data: props.blog_data }
        })
    }
    return (
        <div>
            <Card className={classes.root} onClick={navigatePage}>
                <CardContent >
                    <Typography className={classes.title} color="inherit" gutterBottom>
                        {props.blog_data.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.blog_data.summary}
                    </Typography>
                    <div className={classes.date}>
                    <Typography  variant="span" component="span" color="textSecondary">
                        {props.blog_data.created}
                    </Typography>
                   </div> 
                </CardContent>
            </Card>
        </div>
    )
}
export default withRouter(BlogListItem);