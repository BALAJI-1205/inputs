import React, { useState } from 'react'

const Inputs = () => {
    const [user,setUser]=useState("")
    const handle=(e)=>{
      setUser(e.target.value)  

    }

  return (
    <>   
     <div className='bg-red-500 text-center'>
    <input className="bg-gray-400 p-2  border-2 items-center"  type='text' onChange={handle} placeholder='enter the word'/>
    </div>
     <div>
      {user}
    </div>
    </>
  )
}

export default Inputs