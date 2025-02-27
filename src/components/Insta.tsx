import React from 'react'
import insta1 from '../assets/insta-1.jpg'
import insta2 from '../assets/insta-2.jpg'
import insta3 from '../assets/insta-3.jpg'
import insta4 from '../assets/insta-4.jpg'
import insta5 from '../assets/insta-5.jpg'
import insta6 from '../assets/insta-6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Insta = () => {
   useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          offset: 100,
        });
        AOS.refresh();
      }, []);
  return (
    <div className='w-full lg:px-20 px-5 py-[80px] flex flex-col bg-white justify-center items-center gap-4'>

    <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themePurple text-xl font-semibold capitalize'>Our Instagram</h1>
    <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black font-semibold text-[42px] leading-[50px] text-center capitalize'>Follow on Instagram</h1>
      <div data-aos="zoom-in" data-aos-delay="300" className='w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8'>
        <img src={insta1} alt="" className='rounded-lg cursor-pointer' />
        <img src={insta2} alt="" className='rounded-lg cursor-pointer' />
        <img src={insta3} alt="" className='rounded-lg cursor-pointer' />
        <img src={insta4} alt="" className='rounded-lg cursor-pointer' />
        <img src={insta5} alt="" className='rounded-lg cursor-pointer' />
        <img src={insta6} alt="" className='rounded-lg cursor-pointer' />
      </div>
      <button data-aos="zoom-in" data-aos-delay="400" className="bg-themePurple hover:bg-themeYellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold  mt-[60px] uppercase">FLIPIT</button>
    </div>
  )
}

export default Insta
