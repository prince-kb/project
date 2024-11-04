import React, { useEffect, useState } from "react";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import banner4 from "../assets/banner/banner4.jpg";
import banner5 from "../assets/banner/banner5.jpg";
import banner6 from "../assets/banner/banner6.jpg";

const Banners = () => {
  const [n, setN] = useState(0);
  const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

  useEffect(() => {
    const interval = setInterval(() => n === banners.length - 1 ? setN(0) : setN(n + 1), 3500)
    return () => clearInterval(interval);
  })

  return (
    <div  className={` bannerss mx-auto mt-4 lg:mt-8 h-[18vh] md:h-[30vh] lg:h-[40vh] xl:w-[40vw] w-[60vw] rounded-3xl bg-green-200 relative flex justify-center items-end`}>
    {banners && banners.length > 0 && banners.map((banner, index) => (
      <img src={banners[index]} key={index} alt="Banner" className={` h-full w-[100%] rounded-3xl absolute transition-all duration-500 neu2 border-l-4 lg:border-b-8 lg:border-l-8 border-b-4 ${index === n ? ' z-[2]' : index === (n + 1) % banners.length ? ' -translate-x-2 translate-y-2 lg:-translate-x-4 lg:translate-y-4 z-[1] ' : '-translate-x-4 translate-y-4 lg:-translate-x-8 lg:translate-y-8 z-[0]'} `} />
    ))}
    <div className="flex bg-red-800 mx-6 my-10 ">
      <div className="flex mb-2 md:mb-4 lg:mb-6 gap-3 md:gap-4 lg:gap-6 items-center">
        {banners && banners.length > 0 && banners.map((banner, index) => (
          <div key={index} className={`${n === index ? "lg:h-6 lg:w-6 md:w-4 md:h-4 h-2 w-2" : "lg:h-4 lg:w-4 md:h-2 md:w-2 h-1 w-1"} rounded-full ${n == index ? "bg-orange" : "bg-brown"} cursor-pointer transition-all`} onClick={() => setN(index)}></div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Banners;
