import React, { useEffect, useRef } from 'react'


const Services = ({theme}) => {
  const mainRef = useRef(null)
  useEffect(function(){
    mainRef.current.setAttribute('id',theme)
  },[])
  return (
<div 
ref={mainRef}
className='flex justify-center items-center h-screen w-full  text-9xl'>
        <h1 className=''> Services</h1>
    </div>  )
}

export default Services