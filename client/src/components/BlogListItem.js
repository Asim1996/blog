import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import constants from "../constants";
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        cursor: 'pointer',
        // minWidth: 200,
        borderRadius: 15,
        boxShadow: '0 1.5rem 4rem rgba(0,0,0,0.15)',
        marginBottom: '1rem',
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
            zIndex: 1,
            [theme.breakpoints.down('xs')]: {
                display: 'none',
                fontSize: '7rem',
            },

        }
    },
    content: {
        padding: '0.5rem'
    },
    title: {
        fontSize: '1.5rem',
        textAlign: 'center',
        fontWeight: 700,
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
            lineHeight: 1.5
        },

    },
    pos: {
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem',
            lineHeight: 1.5
        },
    },
    date: {
        fontWeight: 200,
        textAlign: 'right',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem',
            lineHeight: 1.5
        },
    }
}));

function BlogListItem(props) {
    const classes = useStyles();
    function navigatePage() {
        const title = props.blog_data.title.replace(/[^A-Z0-9]+/ig, "-");
        props.history.push(`/${constants.BLOGS_CATEGORY[props.blog_data.category]}/${props.blog_data.id}/${title}`);
        // props.history.push({
        //     pathname: `/${constants.BLOGS_CATEGORY[props.blog_data.category]}/${props.blog_data.id}/${title}`,
        //     state: { blog_data: props.blog_data }
        // })
    }
    return (
        <div>
            <Card className={classes.root} onClick={navigatePage}>
                <CardContent className={classes.content}>
                    <Typography className={classes.title} color="inherit" gutterBottom>
                        {props.blog_data.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.blog_data.summary}
                    </Typography>
                    <div className={classes.date}>
                        <Typography component="p" className={classes.listDate}>
                            {props.blog_data.created}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default withRouter(BlogListItem);