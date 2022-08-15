import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'


const useFetch = URL => {
  const [response, setResponse] = useState()
  useEffect(() => {
    axios.get(URL)
    .then (res => setResponse (res.data))
    .catch(err => (err))
   
  }, [])
   return (response) 
}

export default useFetch