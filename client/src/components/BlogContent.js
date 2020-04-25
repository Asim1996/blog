import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// const BlogContent = (props) => {
//     ReactHtmlParser
//     console.log(props);
//     const blog = props.location.state.blog_data;
//     return (
//         <div>
//             <h1>{blog.title}</h1>
//             <section>
//                 ReactHtmlParser({blog.body})
//         </section>
//             <p>
//                 Asim Ansari
//         </p>
//         </div>
//     )

// }

class BlogContent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        //   const html = '<div>Example HTML string</div>';
        //   return <div>{ ReactHtmlParser(html) }</div>;
        const blog = this.props.location.state.blog_data;
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
