import React from 'react'
import house from '../pics/house.jpg'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-slate-900 to-slate-500 w-full'>
      
        <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
            <div className="h-[40vh] md:h-[40vh] w-full md:w-[28vw] bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-md shadow-white mb-4 md:mb-0">
                <img src={house} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="House" />
            </div>
            <div className="h-[40vh] w-full md:w-[28vw] bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-2xl mb-4 md:mb-0"></div>
        </div>

        
        <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
            <div className="h-[40vh] w-full md:w-[28vw] bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-2xl mb-4 md:mb-0"></div>
            <div className="h-[40vh] w-full md:w-[28vw] bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-2xl"></div>
        </div>
    </div>
  )
}

export default Home
