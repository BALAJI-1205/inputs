import React, { useState } from 'react'
import Lifecycle from './Components/Lifecycle'
import Inputs from './Components/inputs'
import Language from './Components/Language'

const App = () => {
  const [user,setUser]=useState("")
  const handlechange= (e)=>{
 const num= e.target.value;
 if(num===""){
  setUser("");
  return;
 }
  if (Number(num)%2===0){
    setUser(num);
  }
 }
  
  return (
  <>
  <div>
    <form className='text-center'>
      <input onChange={handlechange} type='text' placeholder='enter the number' style={{background:"white",padding:"10px",width: "300px", alignItems:"center"}}/>
      <h1>{user}</h1>
    </form>
  </div>
    <div>
      <Lifecycle/>
      {/* <Inputs/>
      <Language/> */}
    </div>
    </>
  )
}

export default App