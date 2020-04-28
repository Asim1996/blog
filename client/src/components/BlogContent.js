import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ReactHtmlParser from 'react-html-parser';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//     container:{
//             marginBottom:20
//     }

// }));

class BlogContent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const blog = this.props.location.state.blog_data;
        // const classes = useStyles();
        return (
            <Container maxWidth="sm">
                <Typography variant="h1" component="h2">
                    {blog.title}
                </Typography>
                <section>
                { ReactHtmlParser(blog.body) }
                </section>
          </Container>
        )
    }
}
export default BlogContent;
