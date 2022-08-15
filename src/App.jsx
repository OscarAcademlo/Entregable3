import { useState,useEffect } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import axios from 'axios'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'

function App() {
const [location,setLocation] = useState()
const [searchInput,setSearchInput]=useState('')
useEffect(() => {
let numberLocation 
if (searchInput === ''){
  numberLocation = Math.floor(Math.random()*(126-1)+1 )
}else{
  numberLocation = searchInput
}

    const URL =`https://rickandmortyapi.com/api/location/${numberLocation}`  
   axios.get(URL)
   .then (res => setLocation (res.data))
    .catch(err => (err))
}, [searchInput])

 
 const handleSubmit = e => {
e.preventDefault()

setSearchInput(e.target.search.value)
 }
 
  
  return (
    <div className="App">
      <img className='header_png' src="src/img/head r and M.png" alt="" />
      <div className="header">
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
      <input id='search' type="text" />
      <button>Search</button> 
      </form>
      </div >
      <div className="text2">
      <Location location={location}/>
      </div>
      <div>
      {
      location?.residents.map(url => (
        <ResidentInfo
        key={url}
        url={url}
        />
      ))
      

      }

      </div>
    </div>
  )
}

export default App
