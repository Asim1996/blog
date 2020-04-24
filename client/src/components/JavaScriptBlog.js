
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlogLists from "./BlogLists";
import axios from "axios"
import useDataApi from '../hooks/fetchReducer';

export default function JavaScriptBlog(props) {
  // console.log(props);
  // const [blogs, setBlogsData] = useState({ blogs: [] });
  // const [isError, setIsError] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/api/blogs/1`)
  //       console.log(response);
  //       setBlogsData(response.data.data);
  //     } catch (error) {
  //       console.log(error);
  //       setIsError(true);
  //     }

  //   };
  //   fetchData();
  // }, []);
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
  const [state ,  setUrl] = useDataApi(`/api/blogs/1`);
  console.log(state);
// console.log(setUrl);
const {data, isError, isLoading } = state;
  if (isLoading) {
    return <h1>...Loading</h1>
  }
  if (data) {
    // const { title, date, explanation, url } = data
    console.log(data);
    return (
      <div>
      {/* {isError && <div>Something went wrong ...</div>} */}
      <BlogLists blogs_list={data} />
      </div>
    )
  }
  return <h1>Oops something went wrong!</h1>
}