import house from '../assets/house/house10.jpg'
import flat from '../assets/flate/flat.jpg'
import shop from '../assets/shop/Store.jpg'
import garage from '../assets/garage/garage.jpg'
import Banners from './Banners'

const Home = () => {
  return (
    <div className='w-full '>
      <Banners/>
      <h1 className='text-2xl text-center font-semibold mt-4'>Browse Popular Categories</h1>
      <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
        <div className="h-[40vh] md:h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer  border">
          <img src={house} className='w-35vh md:w-[28vw] h-[35vh] rounded-t-xl' alt="House" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">House For Sale</h1>
        </div>
        <div className="h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 transition-all   duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border">
          <img src={house} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Flat" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">House For Rent</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
        <div className="h-[40vh] md:h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 transition-all   duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border">
          <img src={flat} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="House" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Flat For Sale</h1>
        </div>
        <div className="h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 transition-all   duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border">
          <img src={flat} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Flat" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Flat For Rent</h1>
        </div>
      </div>

        <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
            <div className="h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 hover:scale-105 hover:-translate-y-2 transition-all border">
            <img src={shop} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Shop" />
            <h1 className="text-center text-gray-800 font-bold text-xl italic relative top-[-5px] mt-2">Shop For Rent</h1>
            </div>
            <div className="h-[40vh] w-full md:w-[28vw] rounded-xl hover:scale-105 hover:-translate-y-2 transition-all border">
            <img src={garage} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Garage" />
            <h1 className="text-center text-gray-800 font-bold text-xl italic relative top-[-5px] mt-2">Garage For Rent</h1>
            </div>
        </div>
    </div>
  )
}

export default Home;
