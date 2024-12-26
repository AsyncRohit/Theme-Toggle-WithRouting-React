import React, { useEffect, useRef } from 'react'

const About = ({theme}) => {
  const mainRef = useRef(null)
  useEffect(function(){
mainRef.current.setAttribute('id',theme)
  })

  return (
<div 
ref={mainRef}
className='flex justify-center items-center h-screen w-full  text-9xl'>
        <h1 className=''>About</h1>
    </div>  )
}

export default About