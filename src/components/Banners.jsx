import React, { useEffect, useState } from "react";
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpg";
import banner3 from "../assets/banner/banner3.jpg";
import banner4 from "../assets/banner/banner4.jpg";
import banner5 from "../assets/banner/banner5.jpg";
import banner6 from "../assets/banner/banner6.jpg";

const Banners = () => {
  const [n, setN] = useState(0);
  const bannerList = [banner1, banner2, banner3, banner4, banner5, banner6];

  useEffect(() => {
    const set = () =>
      setTimeout(() => {
        setN((n + 1) % bannerList.length);
      }, 2000);
    set();
    return set;
  });

  return (
    <div className="relative h-[50vh] md:h-[35vh] lg:h-[28vh]">
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[50%] md:h-[30%] lg:h-[25%] my-3 mx-auto w-[90%] md:w-[70%] lg:w-1/2 flex justify-center items-center">
        <img  src={bannerList[n]}  alt="b1"  className=" my-4 bg-red-300 rounded-2xl mx-auto bg-contain max-h-1/3 w-[90%] md:w-[65%] lg:w-[50%] transition-all"/>
      </div>
      <div className="absolute flex gap-2 m-6 left-1/3 bottom-2">
        {bannerList.map((item, index) => {
          return <div key={index} onClick={()=>setN(index)} className="cursor-pointer h-4 w-4 bg-blue-300 rounded-full"></div>;
        })}
      </div>
    </div>
  );
};

export default Banners;
