import house from '../../public/assets/house/house10.jpg'
import flat from '../../public/assets/flate/flat.jpg'
import shop from '../../public/assets/shop/Store.jpg'
import garage from '../../public/assets/garage.jpg'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-slate-900 to-slate-500 w-full'>
      
        <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
            <div className="h-[40vh] md:h-[40vh] w-full md:w-[28vw] bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-md shadow-white mb-4 md:mb-0">
                <img src={house} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="House" />
                <h1 className="text-center text-white font-bold text-xl mt-2">House For Rent</h1>
            </div>
            <div className="h-[40vh] w-full md:w-[28vw] bg-gradient-to-b from-black to-gray-900 rounded-xl mb-4 md:mb-0 shadow-md shadow-white">
            <img src={flat} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Flat" />
            <h1 className="text-center text-white font-bold text-xl mt-2">Flat For Rent</h1>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
            <div className="h-[40vh] w-full md:w-[28vw] bg-gradient-to-b from-black to-gray-900 rounded-xl mb-4 md:mb-0 shadow-md shadow-white">
            <img src={shop} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Shop" />
            <h1 className="text-center text-white font-bold text-xl mt-2">Shop For Rent</h1>
            </div>
            <div className="h-[40vh] w-full md:w-[28vw] bg-gradient-to-b from-black to-gray-900 rounded-xl shadow-md shadow-white">
            <img src={garage} className='w-full md:w-[28vw] h-[35vh] rounded-t-xl' alt="Garage" />
            <h1 className="text-center text-white font-bold text-xl mt-2">Garage For Rent</h1>
            </div>
        </div>
    </div>
  )
}

export default Home;
