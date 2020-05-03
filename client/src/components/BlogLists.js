import React from 'react'
import BlogListItem from "./BlogListItem";

export default function BlogLists(props){
    const blogs = props.blogs_list;
    return (
        <div>
     	{
		blogs.length > 0 ? blogs.map((blog) => {
			return <BlogListItem key={blog.id} blog_data = {blog}/>
        })
        : "Still writing..."
    }
        </div>
    )
}