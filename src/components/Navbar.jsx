import React, { useState } from 'react';
import { cross, menuBurger } from '../navComponent';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const navLinks = [
        { href: "", label: "Home" },
        { href: "about", label: "About Us" },
        { href: "/services", label: "Services" },
        { href: "/contact", label: "Contact" }
    ];

    return (
        <header className='bg-white border-b-2'>
            <div className={toggle ? 'transition-[height] ease-in-out delay-150 h-[100vh]' : 'transition-[height] ease-in-out delay-150 h-auto'}>
                <nav className='container mx-auto px-4 py-4 md:px-0 md:flex'>
                    <div className='flex justify-between items-center'>
                        <a href="/" className='ml-4'>
                            <div className='w-16 h-16 rounded-full overflow-hidden'> {/* Decreased size of the logo */}
                                <img 
                                    src={logo} 
                                    alt="Logo" 
                                    className='w-full h-full object-cover' // Keeps the image filling the container properly
                                />
                            </div>
                        </a>
                        <div className='w-6 h-6 z-50 md:hidden' onClick={handleToggle}>
                            {toggle ? (
                                <img src={cross} alt="Cross" width={24} height={24} />
                            ) : (
                                <img src={menuBurger} alt="Menu Burger" width={24} height={24} />
                            )}
                        </div>
                    </div>
                    <ul className={toggle ? 'flex flex-col justify-center items-center h-full absolute top-0 bottom-0 left-0 right-0' : 'hidden md:flex-auto md:flex md:justify-end md:items-center md:gap-16'}>
                        {navLinks.map((item) => (
                            <li key={item.label} className='py-4'>
                                <Link to={item.href} className='text-gray-700 hover:text-black'>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
