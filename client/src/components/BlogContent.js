import React from 'react'
 
const BlogContent = (props) => {
    console.log(props);
    const blog = props.location.state.blog_data;
return (
    <div>
        <h1>{blog.title}</h1>
        <section>
            {blog.body}
        </section>
        <p>
            Asim Ansari
        </p>
    </div> 
   )

}

export default BlogContent;
