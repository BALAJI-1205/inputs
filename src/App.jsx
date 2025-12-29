import React, { useState } from 'react'
import Lifecycle from './Components/Lifecycle'

const App = () => {
  const [user,setUser]=useState("")
  const handlechange= (e)=>{
setUser(e.target.value)
  }
  return (
  <>
  <div>
    <form className='text-center'>
      <input onChange={handlechange} type='text'placeholder='enter the number' style={{background:"white",padding:"10px",width: "300px", alignItems:"center"}}/>
      <h1>{user}</h1>
    </form>
  </div>
    <div>
      <Lifecycle/>
    </div></>
  )
}

export default App