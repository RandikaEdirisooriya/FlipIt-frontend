import React from 'react'
import payment from '../assets/payment.png'
import shiping from '../assets/shipping.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Services = () => {
     useEffect(() => {
          AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              offset: 100,
          });
          AOS.refresh();
      }, []);
  
  return (
    <div  className='w-full lg:px-20 px-5 pt-[8px] pb-[88px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10'>

    <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
      <img src={shiping} alt="" className='mb-[20px] w-[60px]' />
      <h1 className='text-xl text-black font-semibold'>Worldwide Shipping</h1>
      <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
    </div>
  
    <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
      <img src={payment} alt="" className='mb-[20px] w-[60px]' />
      <h1 className='text-xl text-black font-semibold'>100% sure payment</h1>  {/* Corrected to 100k+ */}
      <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
    </div>
    <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
      <img src={refund} alt="" className='mb-[20px] w-[60px]' />
      <h1 className='text-xl text-black font-semibold'>refund policy</h1>  {/* Corrected to 100k+ */}
      <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
    </div>
    <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-2'>
      <img src={gift} alt="" className='mb-[20px] w-[60px]' />
      <h1 className='text-xl text-black font-semibold'>100k+</h1>  {/* Corrected to 100k+ */}
      <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
    </div>
  
  </div>
  
  )
}

export default Services
