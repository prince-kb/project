import React, { useState } from 'react'
import { acLogo, cross, menuBurger } from '../../public/navComponent'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    const navLinks = [
      {href:"", label:"Home"},
      {href:"about", label:"About Me"},
      {href:"/services", label:"Services"},
      {href:"/projects", label:"Projects"},
      {href:"/contact", label:"Contact"}
  ]

  return (
    <header className='bg-white border-b-2'>
        <div className={toggle?'transition-[height] ease-in-out delay-150 h-[100vh]':'transition-[height] ease-in-out delay-150 h-auto'}>
            <nav className='container mx-auto px-4 py-4 md:px-0 md:flex' >
                <div className='flex justify-between items-center'>
                    <a href="/"><img src={acLogo} alt="Logo" width={60} height={60} /></a>
                    <div className='w-6 h-6 z-50 md:hidden' onClick={handleToggle}>
                        {toggle?<img src={cross} alt="Cross" width={24} height={24} />:<img src={menuBurger} alt="Menu Burger" width={24} height={24} />}
                    </div>
                </div>
                <ul className={toggle?'flex flex-col justify-center items-center h-full absolute top-0 bottom-0 left-0 right-0':'hidden md:flex-auto md:flex md:justify-end md:items-center md:gap-16'}>
                    {navLinks.map((item) => (
                        <li key={item.label} className='py-4'><Link to={item.href} className='text-gray-700 hover:text-black'>{item.label}</Link></li>
                    ))}
                </ul>
            </nav>
        </div>

    </header>
  )
}

export default Navbar