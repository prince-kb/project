import React from "react";
import h1 from "../assets/houserent/h1.jpg";
import houserent from "../constants/houserent";

const HouseRent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className=" w-[30vw] rounded-xl bg-white flex flex-col  shadow-lg transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-2 cursor-pointer border">
        {houserent.map((pack) => (
          <div>
            <img
              // src={pack.img}
              src={h1}
              className="w-[80vw] md:w-[40vw] lg:w-[30vw] "
            ></img>
            <div className="">
              <h1 className=" flex px-2 text-xl justify-center items-center">
                {pack.des}
              </h1>
              <div className="flex gap-9 px-2 justify-center text-xl mt-4">
                <div className="flex items-center justify-center flex-col">
                  <h1>{pack.loc}</h1>
                  <p>kolkata</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <h1>{pack.price}</h1>
                  <p>20000-25000</p>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <h1>{pack.type}</h1>
                  <p>2-4BHK</p>
                </div>
              </div>
            </div>
             ̰
          </div>
        ))}

        {/* <img src={h1} className='w-[80vw] md:w-[40vw] lg:w-[30vw] ' ></img>
       <div  className=''>
        <h1 className=' flex px-2 text-xl justify-center items-center'>Description</h1>
        <div className='flex gap-9 px-2 justify-center text-xl mt-4'>
        <div className='flex items-center justify-center flex-col'>
        <h1>Location</h1>
        <p>kolkata</p>        
        </div>
        <div className='flex items-center justify-center flex-col'>
        <h1>Price</h1>
        <p>20000-25000</p>
        </div>
        <div className='flex items-center justify-center flex-col'>
        <h1>Type Of</h1>
        <p>2-4BHK</p>
        </div>
        </div>
        
         </div> */}
      </div>
    </div>
  );
};

export default HouseRent;
