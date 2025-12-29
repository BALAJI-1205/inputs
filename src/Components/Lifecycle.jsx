import React, { useEffect, useState } from 'react'

const Lifecycle = () => {
const[tim,setTim]=useState(0)
const Timer=()=>{
    const timeshow =setInterval(()=>{
        setTim(prev=>prev+1)
    },1000)
}

useEffect(()=>{
Timer()
},[])

  return (
    <div className='bg-amber-400 text-center p-2'>
        <h1> timer: {tim}</h1>
        
    </div>
  )
}

export default Lifecycle