
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlogLists from "./BlogLists";
import axios from "axios"
import useDataApi from '../hooks/fetchReducer';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

export default function NodeBlog(props) {
  // const classes = useStyles();
  const [state ,  setUrl] = useDataApi(`/api/blogs/2`);
  // console.log(state);
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