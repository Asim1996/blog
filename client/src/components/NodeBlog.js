
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlogLists from "./BlogLists";
import useDataApi from '../hooks/fetchReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '25rem'
  },
}));
export default function NodeBlog(props) {
  const classes = useStyles();
  const [state, setUrl] = useDataApi(`/api/blogs/2`);
  const { data, isError, isLoading } = state;

  if (data) {
<<<<<<< HEAD
=======
    console.log(data);
>>>>>>> fdf4f5ab0f30a161a0dc85aa81a5249523c825ce
    return (
      <div>
        {/* {isError && <div>Something went wrong ...</div>} */}
        <BlogLists blogs_list={data} />
      </div>
    )
  }
  if(isError){
    return <h1>Oops something went wrong!</h1>
  }
  return (<div className={classes.root}>
    <CircularProgress />
  </div>
  )
}