import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client6.png'
import client6 from '../assets/client4.png'

import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
function Footer() {
     useEffect(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease-in-out',
                offset: 100,
            });
            AOS.refresh();
        }, []);
  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center'>
    {/* 1st box starts here */}
  
    <div data-aos="zoom-in" data-aos-delay="100" className='w-full bg-themePurple lg:px-20 px-10 py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10'>
  
      <img src={client1} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
      <img src={client2} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
      <img src={client3} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
      <img src={client4} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
      <img src={client5} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
      <img src={client6} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />

  
    </div>
    <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10'>

  <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-start gap-10 grow'>

    <div className='flex flex-col justify-center items-start gap-4'>
      <h1 className='text-4xl font-bold text-themePurple underline italic'>FLIPIT Shop</h1>
      <p className='text-gray-500 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Nisi voluptatem doloribus accusamus neque, quam laboriosam fugiat ipsa distinctio similique cumque?</p>
    </div>

    <div className='flex flex-col justify-center items-start gap-4'>
      <h1 className='text-black text-xl font-semibold capitalize'>Download our app</h1>
    <div className='flex justify-center items-center gap-4'>
    <img src={google} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
    <img src={apple} alt="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100' />
    </div>
    
    </div>

  </div>
<div data-aos="zoom-in" data-aos-delay="200" >  
<h1 className='text-black text-xl font-semibold capitalize'>Useful Links</h1>
<ul className='mt-8 flex flex-col justify-center items-start gap-2'>

  <li className='text-gray-500 hover:text-black cursor-pointer'>Home</li>
  <li className='text-gray-500 hover:text-black cursor-pointer'>About</li>
  <li className='text-gray-500 hover:text-black cursor-pointer'>Contact</li>

</ul>

</div>
<div data-aos="zoom-in" data-aos-delay="200" >  
<h1 className='text-black text-xl font-semibold capitalize'>Useful Links</h1>
<ul className='mt-8 flex flex-col justify-center items-start gap-2'>

  <li className='text-gray-500 hover:text-black cursor-pointer'>Home</li>
  <li className='text-gray-500 hover:text-black cursor-pointer'>About</li>
  <li className='text-gray-500 hover:text-black cursor-pointer'>Contact</li>

</ul>

</div>


</div>
<div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100'>
  <hr className="border-t border-gray-300 py-3" /> {/* Corrected className */}

  <div className='w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10'>
    <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'>
      <img src={pay1} alt="Payment 1" className='w-[50px] rounded-lg' /> {/* Added alt text and corrected rounded-lg */}
      <img src={pay2} alt="Payment 2" className='w-[50px] rounded-lg' /> {/* Added alt text and corrected rounded-lg */}
      <img src={pay3} alt="Payment 3" className='w-[58px] rounded-lg' /> {/* Added alt text and corrected rounded-lg */}
      <img src={pay4} alt="Payment 4" className='w-[50px] rounded-lg' /> 
    </div>

    <div className='lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow'>
      <h1 className='text-black font-semibold text-2xl'>Subscribe Newsletter</h1> 
      <div>
        <input 
          type="email" 
          placeholder="Enter valid email" 
          className='lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg' 
        /> 
        <button className="w-full lg:w-auto bg-themePurple hover:bg-themeYellow text-white hover:text-black px-6 py-3 rounded-r-lg"> 
          SUBMIT
        </button>
      </div>
    </div>
    <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'>
     <p className='text-gray-500 lg:text-end text-center'>@Copyright 2025 All rights reserved</p> 
    </div>
  </div>
  <div id="icon-box" className='bg-themePurple text-white p-3 rounded-full hover:bg-themeYellow hover:text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
  <Link to="hero" spy={true} offset={-100} smooth={true}>
    <FaArrowUp className='w-[35px] h-[35px]' />
  </Link>
</div>
</div>

  </div>
  )
}

export default Footer
