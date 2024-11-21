import React from 'react';
import house from '../assets/house/house10.jpg';
import flat from '../assets/flate/flat.jpg';
import shop from '../assets/shop/Store.jpg';
import garage from '../assets/garage/garage1.jpg';
import Banners from './Banners';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full'>
      <Banners />
      
      <div className='container mx-auto px-4 py-8 mt-4'>
        <h2 className='text-xl font-bold mb-4 text-center'>Search Listings</h2>

      </div>

      <h1 className='text-2xl text-center font-semibold lg:text-3xl mt-6 md:mt-8 lg:mt-10 text-amber-800'>
        Browse Popular Categories at Homie
      </h1>

      <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
        <div onClick={() => navigate('/salehouse')} className="h-auto w-full md:w-auto rounded-xl mb-4 md:mb-0 transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border">
          <img src={house} className='w-[80vw] md:w-[40vw] lg:w-[30vw] rounded-t-xl' alt="House" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">House For Sale</h1>
        </div>
        <div onClick={() => navigate('/renthouse')} className="h-auto w-full md:w-auto rounded-xl mb-4 md:mb-0 transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border">
          <img src={house} className='w-[80vw] md:w-[40vw] lg:w-[30vw] rounded-t-xl' alt="Flat" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">House For Rent</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around px-4 md:px-0'>
        <div className="h-auto w-full md:w-auto rounded-xl mb-4 md:mb-0 transition-all hover:scale-105 hover:-translate-y-2 cursor-pointer border">
          <img src={flat} className='w-[80vw] md:w-[40vw] lg:w-[30vw] rounded-t-xl' alt="Flat" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Flat For Sale</h1>
        </div>
        <div className="h-auto w-full md:w-auto rounded-xl mb-4 md:mb-0 transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border">
          <img src={flat} className='w-[80vw] md:w-[40vw] lg:w-[30vw] rounded-t-xl' alt="Flat" />
          <h1 className="text-center text-gray-800 font-semibold text-2xl italic relative top-[-5px] mt-2 shadow-sm">Flat For Rent</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around my-10 px-4 md:px-0'>
        <div className="h-auto w-full md:w-auto rounded-xl mb-4 md:mb-0 hover:scale-105 hover:-translate-y-2 transition-all border">
          <img src={shop} className='w-[80vw] md:w-[40vw] lg:w-[30vw] rounded-t-xl' alt="Shop" />
          <h1 className="text-center text-gray-800 font-bold text-xl italic relative top-[-5px] mt-2">Shop For Rent</h1>
        </div>
        <div className="h-auto w-full md:w-auto rounded-xl hover:scale-105 hover:-translate-y-2 transition-all border">
          <img src={garage} className='w-[80vw] md:w-[40vw] lg:w-[30vw] rounded-t-xl' alt="Garage" />
          <h1 className="text-center text-gray-800 font-bold text-xl italic relative top-[-5px] mt-2">Garage For Rent</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
