
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppRouter from '../Routers/AppRouter';

const useStyles = makeStyles((theme)=>({
    divRoot:{
        margin: '0 auto',
        width: '-webkit-fill-available'
    },
    content: {
        flexGrow: 1,
        position:"relative",
        top:10,
        margin: '0 auto',
        maxWidth: "100vw",
        [theme.breakpoints.up('sm')]: {
            maxWidth: "70vw"
        },
      },
      toolbar: theme.mixins.toolbar,
}));

const BlogView = () => {
    const classes = useStyles();
    return (
        <div className={classes.divRoot}>
            <main className={classes.content}>
                <Container maxWidth="lg">
                    <AppRouter />
                </Container>
            </main>
        </div>
    )
}

export default BlogView;
