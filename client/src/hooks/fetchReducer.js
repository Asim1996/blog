import React, { useEffect, useReducer, useState } from 'react'  
import axios from 'axios' 

const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };

  
  const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(initialUrl);
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
    useEffect(() => {
      const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });
        try {
          const result = await axios.get(url);
<<<<<<< HEAD
=======
          console.log(result);
>>>>>>> fdf4f5ab0f30a161a0dc85aa81a5249523c825ce
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data.data });
        } catch (error) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      };
      fetchData();
    }, [url]);
   return [state, setUrl];
  };

  export default useDataApi;