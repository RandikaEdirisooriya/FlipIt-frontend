import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import deal from '../assets/bannerwhole.png'
const Banner = () => {
     useEffect(() => {
          AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              offset: 100,
          });
          AOS.refresh();
      }, []);
  return (
    <div className='w-full lg:px-20 px-5 py-[80px]'>
  <div data-aos="zoom-in" data-aos-delay="100"
    className="w-full h-[300px] rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3 p-4" 
    style={{ backgroundImage: `url(${deal})` }}>

    <h1 className='text-themeYellow text-xl font-semibold'>Everyday Shopping</h1>
    <h1 className='text-white font-bold text-[42px] leading-[50px] text-center'>Deal of the Day</h1>

  </div>
</div>
  )
}

export default Banner
