
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlogLists from "./BlogLists";
import useDataApi from '../hooks/fetchReducer';

export default function NodeBlog(props) {
  const [state, setUrl] = useDataApi(`/api/blogs/2`);
  const { data, isError, isLoading } = state;
  if (isLoading) {
    return <h1>...Loading</h1>
  }
  if (data) {
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