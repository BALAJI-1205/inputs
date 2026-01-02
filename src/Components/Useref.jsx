import React, { useRef } from 'react'

const Useref = () => {
  
    const myRef=useRef("")
    const handle=()=>{
 myRef.current.innerText="hello";
console.log(handle)
    }
  return (
    <>
    <div className='bg-pink-500 text-black text-2xl'>
      <h1>useRef concept:</h1>
      <p>useref is a hook used in react ,its not rerender the components,its process in simple project ,
        its directly connected with dom to show in a screen , using dom property</p>
    </div>
    <div ref={myRef} className='text-center'>     
<button className='bg-amber-300 text-center p-1' onClick={handle}>click</button>
    </div>
        </>
  )
}

export default Useref