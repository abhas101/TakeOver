import React from 'react'
import NightMode from '../NightMode'

const NavBar = () => {
  return (
    <>
    <section className="nav-wrapper items-center justify-center flex w-full  bg-blue-800">
    <nav className="nav-bar flex justify-between  bg-black text-white p-2 w-full md:w-2/3 mt-5 md:rounded-lg backdrop-blur-sm shadow-md px-10 items-center  top-3 backdrop-blur-md backdrop-filter font-bold backdrop-blur-sm bg-opacity-80  fixed z-50">
        <div className="logo">
            <span className='text-xl'>TakeOver</span>
        </div>
        <div className="nav-items">
            <ul className='flex items-center'>
                <li className='px-5 md:px-10 hover:text-teal-400 transition-colors'><a href="#">Home</a></li>
                <li className='px-5 md:px-10 hover:text-teal-400 transition-colors'><a href="#">Products</a></li>
                <li className='px-5 md:px-10 hover:text-teal-400 transition-colors'><a href="#">join</a></li>
                <li className='px-5 md:px-10 hover:text-teal-400 transition-colors'><a href="#"> <NightMode /></a></li>



               
            </ul>

        </div>
    </nav>
    </section>
    
    
    
    </>
  )
}

export default NavBar
