import React, { useEffect, useRef, useState } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Link} from 'react-router-dom'



const Navbar = ({theme,ThemeChanger}) => {
  const mainRef = useRef(null)
  useEffect(function(){
mainRef.current.setAttribute('id',theme)
  })
  return (
    <div 
    ref={mainRef}
    className='px-6 flex  py-4 justify-between itmes-center bg-transparent text-white text-xl font-semibold fixed top-0 left-0 w-full'>
        <h1>My Company</h1>
        <div className='flex gap-10'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/services'}>Services</Link>
        </div>
        <div>
            <h1 
            onClick={()=>{
ThemeChanger()
            }}
            className='cursor-pointer'>Theme</h1>
        </div>
    </div>
  )
}

export default Navbar