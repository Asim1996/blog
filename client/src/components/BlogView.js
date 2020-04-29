
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppRouter from '../Routers/AppRouter';

const useStyles = makeStyles((theme)=>({
    divRoot:{
        margin: '0 auto'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        position:"relative",
        top:100,
        width: "100vw",
        [theme.breakpoints.up('sm')]: {
            width: "70vw"
        },
      },
      toolbar: theme.mixins.toolbar,
}));

const BlogView = () => {
    const classes = useStyles();
    return (
        <div className={classes.divRoot}>
            <main className={classes.content}>
            {/* <div className={classes.toolbar} > */}
                <Container maxWidth="lg">
                    <AppRouter />
                </Container>
            {/* </div>     */}
            </main>
        </div>
    )
}

export default BlogView;
