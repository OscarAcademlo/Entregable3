import React from 'react'
import useFetch from '../hooks/useFetch';

const ResidentInfo = ({url}) => {
const resident = useFetch(url)
const bgcolor= {
}
if(resident?.status==='Dead'){
    bgcolor.backgroundColor="red"
} else if(resident?.status==='Alive'){
    bgcolor.backgroundColor="green"
} else {
    bgcolor.backgroundColor="gray"
}
if(resident?.type===""){
    resident.type= "Unknown"
}


  return (
    <div className="container">
    <article className='ficha'>
        <div className="card">
        <header>
            <img className='img1' src={resident?.image} alt= {`image of ${resident?.name}`} />
            <div className="estado_1">
            <div className="circle" style={bgcolor}></div>
            <span className='state'>{resident?.status}</span>
            </div>
        </header>
        <div>
        <h3>{resident?.name}</h3>
       <ul>
        <li><span>Species: </span>{resident?.species} </li>
        <li><span>Origin: </span>{resident?.origin.name}</li>
        <li><span>Eppisodes where appear: </span>{resident?.episode.length}</li>
       </ul>
       </div>
        </div>



    </article> 
    </div>
  )
}

export default ResidentInfo