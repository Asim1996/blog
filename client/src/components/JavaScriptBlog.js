
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlogLists from "./BlogLists";
import axios from "axios"

export default function JavaScriptBlog(props) {
  const [blogs, setBlogsData] = useState({ blogs: [] });
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/blogs/1`)
        console.log(response);
        setBlogsData(response.data.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

    };
    fetchData();
  }, []);
  // let blogs_data = [
  //   {
  //     id:1,
  //     title:"first"
  //   },{
  //     id:2,
  //     title:"second"

  //   },{
  //     id:3,
  //     title:"third"
  //   }
  // ]
  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      <BlogLists blogs_list={blogs} />
    </div>

  );
}