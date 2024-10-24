import React, { useEffect, useState } from 'react'
import banner1 from '../assets/banner/banner1.jpg'
import banner2 from '../assets/banner/banner2.jpg'
import banner3 from '../assets/banner/banner3.jpg'

const Banners = () => {
    const [n,setN] = useState(0);
    const bannerList =[banner1,banner2,banner3];

    useEffect(()=>{
        const set =() => setTimeout(()=>{
            setN((n+1)%bannerList.length);
        },2000)
        set();
        return set;
    })

  return (
    <div className='h-[35%] md:h-[30%] lg:h-[25%] my-3 mx-auto w-[90%] md:w-[70%] lg:w-1/2 flex justify-center items-center'>
        <img src={bannerList[n]} alt="b1" className='rounded-2xl mx-auto bg-contain h-full w-auto transition-all'  />
    </div>
  )
}

export default Banners