import React from 'react'

const Navbar = () => {
  return (
    <>
    <body className="font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-[10vh]">
    <header className="bg-green">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img className="w-16 cursor-pointer "  src="https://cdn3.vectorstock.com/i/1000x1000/59/27/hotel-hospitality-logo-design-template-vector-20825927.jpg" alt="..."></img>
            </div>
            <div
                className="nav-links duration-500 md:static absolute bg-yellow md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
            </div>
            </nav>
    </header>
    </body>
    </>
  )
}

export default Navbar