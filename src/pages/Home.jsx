import React, { useEffect, useRef, useState } from 'react'


const Home = ({theme}) => {
  const mainRef = useRef(null)

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.setAttribute('id', theme); 
    }
  }, [theme]);
  return (
    <div
    ref={mainRef}
    
    className='flex justify-center items-center h-screen w-full  text-9xl'>
        <h1> Home</h1>
    </div>
  )
}

export default Home