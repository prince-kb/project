import React from "react";
import houserent from "../constants/houserent";

const HouseRent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 w-full max-w-4xl">
        {houserent.map((pack, index) => (
          <div
            key={index}
            className="rounded-lg bg-white shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 border"
          >
            <img
              src={pack.img} 
              alt={pack.des}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold text-center mb-2">
                {pack.des}
              </h1>
              <div className="flex justify-around text-center text-sm">
                <div>
                  <h2 className="font-medium">Location</h2>
                  <p>{pack.loc}</p>
                </div>
                <div>
                  <h2 className="font-medium">Price</h2>
                  <p>{pack.price}</p>
                </div>
                <div>
                  <h2 className="font-medium">Type</h2>
                  <p>{pack.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseRent;
