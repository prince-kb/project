import React, { useState } from "react";
import { houserent } from "../constants/houseconstants";


const HouseRent = () => {

  const [items, setItems] = useState(houserent);
  const [filter, setFilter] = useState({ city: "All", type: "All", price: "All" });

  const filterItems = (city, type, price) => {

    let tempItems = houserent;
    if (city !== "All") {
      tempItems = tempItems.filter((item) => item.loc === city);
    }
    if (type !== "All") {
      tempItems = tempItems.filter((item) => item.type === type);
    }
    if (price !== "All") {
      tempItems = tempItems.filter((item) => {
        if (price === "0-10000") {
          return item.minPrice < 9999;
        }
        else if (price === "10001-30000") {
          return item.minPrice > 9999 && item.maxPrice < 30000;
        }
        else if (price === "30001-50000") {
          return item.minPrice > 29999 && item.maxPrice < 50000;
        }
        else if (price === "50001") {
          return item.minPrice > 49999;
        }
        return item;
      });
    }
    setItems(tempItems);
  }

  return (
    <div className="min-h-screen">

      <h1 className="my-4 lg:text-3xl text-2xl font-semibold text-amber-600 text-center">Explore available houses for rent</h1>
      {/* Filter */}

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-4 mx-4'>

        {/* City Input */}
        <div>
          <label htmlFor="cityType" className='block text-gray-700 mb-2 ml-2'>City</label>
          <select onChange={(e) => { setFilter({ ...filter, city: e.target.value }) }} id="cityType" className='border rounded w-full py-2 px-3'>
            <option value="All" default>All</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Lucknow">Lucknow</option>
          </select>
        </div>

        {/* Property Type Selection */}
        <div>
          <label htmlFor="propertyType" className='block text-gray-700 mb-2 ml-2'>Type</label>
          <select onChange={(e) => { setFilter({ ...filter, type: e.target.value }) }} id="propertyType" className='border rounded w-full py-2 px-3'>
            <option value="All" default>All</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="4BHK">4BHK</option>
          </select>
        </div>

        {/* Price Selection with Search Button */}
        <div className='flex items-start md:col-span-1'>
          <div className='w-full mb-0'>
            <label htmlFor="price" className='block text-gray-700 mb-2 ml-2'>Price</label>
            <select onChange={(e) => { setFilter({ ...filter, price: e.target.value })}} id="price" className='border rounded w-full py-2 px-3'>
              <option value="All" default>All</option>
              <option value="0-10000">Under 10,000</option>
              <option value="10001-30000">10,001 - 30,000</option>
              <option value="30001-50000">30,001 - 50,000</option>
              <option value="50001">Over 50,000</option>
            </select>
          </div>
          {/* Search Button */}
          <div className='ml-2 mt-4'>
            <button onClick={() => { filterItems(filter.city, filter.type, filter.price)}} className='bg-amber-600 text-white font-semibold py-2 px-4 rounded hover:bg-amber-500 transition duration-200 mt-4'>Search</button>
          </div>
        </div>
      </div>

      {items.length === 0 ? <h1 className="text-center text-2xl font-bold py-8 bg-gray-100">No houses available for the filter</h1>:

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 p-4 w-full max-w-4xl mx-auto">
              {items.map((pack, index) => (
                <div key={index} className="rounded-t-2xl rounded-lg bg-white shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 border">
                  <img src={pack.img} alt={pack.des} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h1 className="text-lg font-semibold text-center mb-2">{pack.des}</h1>
                    <div className="flex justify-around text-center text-sm">
                      <div>
                        <h2 className="font-medium">Location</h2>
                        <p>{pack.loc}</p>
                      </div>
                      <div>
                        <h2 className="font-medium">Price </h2>
                        <p>&#8377; {pack.minPrice}-{pack.maxPrice}</p>
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
      }
    </div>
  );
};

export default HouseRent;
