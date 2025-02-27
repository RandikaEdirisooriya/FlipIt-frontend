import React, { useEffect } from 'react';
import cat1 from '../assets/catbook1.webp';
import cat2 from '../assets/catbook2.webp';
import cat3 from '../assets/catbook3.png';
import cat4 from '../assets/catbook4.png';
import cat5 from '../assets/catbook5.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            offset: 100,
        });
        AOS.refresh();
    }, []);

    return (
      <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>

      <div data-aos="zoom-in" data-aos-delay="50" className="lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]">
    
        <h1 className='text-themepurple text-xl  font-semibold text-center'>Favorite item</h1>
    
        <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center'>Popular Category</h1>
    
        <button className="bg-themePurple hover:bg-themeYellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]">VIEW ALL</button>
    
      </div>
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-6'>
  <img src={cat1} alt="" className='rounded-full cursor-pointer w-32 h-32 object-cover' />
  <h1 className='text-black text-xl text-center font-semibold hover:text-themepurple cursor-pointer'>Harry Potter</h1>
</div>

<div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6'>
  <img src={cat2} alt="" className='rounded-full cursor-pointer w-32 h-32 object-cover' />
  <h1 className='text-black text-xl text-center font-semibold hover:text-themepurple cursor-pointer'>Disney Books</h1>
</div>

<div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-center gap-6'>
  <img src={cat3} alt="" className='rounded-full cursor-pointer w-32 h-32 object-cover' />
  <h1 className='text-black text-xl text-center font-semibold hover:text-themepurple cursor-pointer'>Navel Books</h1>
</div>

<div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-6'>
  <img src={cat4} alt="" className='rounded-full cursor-pointer w-32 h-32 object-cover' />
  <h1 className='text-black text-xl text-center font-semibold hover:text-themepurple cursor-pointer'>Super Hero Books</h1>
</div>

<div data-aos="zoom-in" data-aos-delay="500" className='flex flex-col justify-center items-center gap-6'>
  <img src={cat5} alt="" className='rounded-full cursor-pointer w-32 h-32 object-cover' />
  <h1 className='text-black text-xl text-center font-semibold hover:text-themepurple cursor-pointer'>Scooby Doo Books</h1>
</div>


         
           
        </div>
    );
};

export default Category;
