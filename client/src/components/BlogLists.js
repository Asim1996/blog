import React from 'react'
import BlogListItem from "./BlogListItem";

export default function BlogLists(props){
    const blogs = props.blogs_list;
    return (
        <div>
        {/* <figure>
            <img width= "150px" src= "../images/javascript.jpg" /> 
        </figure>   */}
         {/* <FontAwesomeIcon icon={['fab', 'javascript']} /> */}
		{
		blogs.length > 0 ? blogs.map((blog) => {
			return <BlogListItem key={blog.id} blog_data = {blog}/>
        })
        : "No Blogs Available"
    }
        </div>
    )
}