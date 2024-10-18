import house from '../../public/assets/house/house10.jpg'
import flat from '../../public/assets/flate/flat.jpg'
import shop from '../../public/assets/shop/Store.jpg'
import garage from '../../public/assets/Garage/garage.jpg'

const Home = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
        <div className="h-[40vh] md:h-[40vh] w-full md:w-[28vw] rounded-xl shadow-md shadow-black mb-4 md:mb-0 transition-all delay-300 duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-[#4a4a4a]">
          <img src={house} className='w-35vh md:w-[28vw] h-[35vh] rounded-t-xl' alt="House" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">House For Sale</h1>
        </div>
        <div className="h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 shadow-md shadow-black transition-all delay-300 duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-[#4a4a4a]">
          <img src={house} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Flat" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">House For Rent</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
        <div className="h-[40vh] md:h-[40vh] w-full md:w-[28vw] rounded-xl shadow-md shadow-black mb-4 md:mb-0 transition-all delay-300 duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-[#4a4a4a]">
          <img src={flat} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="House" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Flat For Sale</h1>
        </div>
        <div className="h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 shadow-md shadow-black transition-all delay-300 duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-[#4a4a4a]">
          <img src={flat} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Flat" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Flat For Rent</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
        <div className="h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 shadow-md shadow-black transition-all delay-300 duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-[#4a4a4a]">
          <img src={shop} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Shop" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Shop For Sale</h1>
        </div>
        <div className="h-[40vh] w-full md:w-[28vw] rounded-xl shadow-md shadow-black transition-all delay-300 duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-[#4a4a4a]">
          <img src={shop} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Garage" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Shop For Rent</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
        <div className="h-[40vh] md:h-[40vh] w-full md:w-[28vw] rounded-xl shadow-md shadow-black mb-4 md:mb-0 transition-all delay-300 duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-[#4a4a4a]">
          <img src={garage} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="House" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Garage For Sale</h1>
        </div>
        <div className="h-[40vh] w-full md:w-[28vw] rounded-xl mb-4 md:mb-0 shadow-md shadow-black transition-all delay-300 duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border-2 border-[#4a4a4a]">
          <img src={garage} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Flat" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Garage For Rent</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
