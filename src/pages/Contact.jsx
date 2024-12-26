import React, { useEffect, useRef } from 'react'


const Contact = ({theme}) => {
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
        <h1 className=''> Contact</h1>
    </div>
  )
}

export default Contact