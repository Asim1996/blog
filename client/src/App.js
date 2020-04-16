import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = props => {
    useEffect(() => {
      axios.get('/ping')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      Home
      <p>{state}</p>
    </div>
 )
};

export default App;