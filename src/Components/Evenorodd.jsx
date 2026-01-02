import React, { useState } from 'react'

const Evenorodd = () => {
    const[number,setNumber]=useState(0);
    const[resut,setResult]=useState("");
    const checkNumber=()=>{
        if(number % 2==0){
            setResult("even number");
        }
        else{
            setResult("odd number")
        }
    }

     const valuetake=(e)=>{
setNumber(e.target.value)
        }
  return (
    <div className='bg-amber-950'>
        <input className='bg-blue-600 text-black border-2' type="number" onChange={valuetake}/>
        <button  className="bg-amber-400"onClick={checkNumber}>check</button>
        <h3 className='bg-gray-500'>{resut}</h3>
    </div>
  )
}
export default Evenorodd