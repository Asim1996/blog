
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppRouter from '../Routers/AppRouter';

const useStyles = makeStyles((theme)=>({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      toolbar: theme.mixins.toolbar,
}));

const BlogView = () => {
    const classes = useStyles();
    return (
        <div>
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
// className={classes.container}