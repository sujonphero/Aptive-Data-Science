import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [open,setOpen] = useState(false)

    // create toggle open function
    const handleNavOpen = () =>{
        setOpen(!open)
    }


    // create toggle open function
    // const handleNavClose = () =>{
    //     setOpen(!open)
    // }

  return (
    <header className='w-full fixed z-10 bg-gray-800'>

        <nav className='h-16 px-6 flex justify-between items-center '>
            
            {/* logo section */}
            <div>
                <img className='w-10 cursor-pointer' src={logo} alt="" />
            </div>

            {/* desktop navigation section */}
            <ul className='hidden md:flex space-x-8 uppercase text-white font-semibold'>

            {/* <Link to="home" spy={true} smooth={true} offset={50} duration={500}> */}
                <li>
                    <Link to='/'>Home</Link>
                </li>
            {/* </Link> */}
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/'>Pricing</Link>
                </li>

                <li>
                    <Link to='/'>Faq</Link>
                </li>

                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>

            {/* toggle function icon */}
            <div onClick={handleNavOpen} className='md:hidden cursor-pointer text-white'>
                {
                    (!open) ? <FaBars size={25}/>:<FaTimes size={25}/>
                }
                

                {/* open mobile-menu on navbar */}
                <ul className={(!open ? 'hidden':'absolute top-16 px-10 uppercase font-semibold text-center left-0 bg-gray-800 w-full h-[200px]')}>

                <li className='border-b-2 py-2 hover:bg-slate-700 rounded duration-300'>
                    <Link to='/'>Home</Link>
                </li>

                <li className='border-b-2 py-2 hover:bg-slate-700 rounded duration-300'>
                    <Link to='/'>Pricing</Link>
                </li>

                <li className='border-b-2 py-2 hover:bg-slate-700 rounded duration-300'>
                    <Link to='/'>Faq</Link>
                </li>

                <li className='border-b-2 py-2 hover:bg-slate-700 rounded duration-300'>
                    <Link to='/'>Contact</Link>
                </li>

            </ul>

            </div>
        </nav>
    </header>
  )
}

export default Navbar