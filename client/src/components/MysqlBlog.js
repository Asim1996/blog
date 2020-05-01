
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlogLists from "./BlogLists";
import useDataApi from '../hooks/fetchReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function MysqlBlog(props) {
  const classes = useStyles();
  const [state, setUrl] = useDataApi(`/api/blogs/4`);
  const { data, isError, isLoading } = state;
  if (data) {
    return (
      <div>
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