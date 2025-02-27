import React from 'react'
import { FaStar,FaRegHeart } from 'react-icons/fa'
import { MdOutlineRemoveRedEye ,MdOutlineShoppingCart} from 'react-icons/md'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { products } from '../export';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import  Cart  from './cart';
const ProductGrid = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const resetCart = () => {
    setCartItems([]); 
  };
   useEffect(() => {
          AOS.init({
              duration: 1000,
              easing: 'ease-in-out',
              offset: 100,
          });
          AOS.refresh();
      }, []);

      const addToCart = (item: any) => {
        setCartItems((prev) => [...prev, item]);
        setIsCartOpen(true);
      };
  return (
    <div id='products' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>

    <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themepurple text-xl font-semibold'>Browse Collections</h1>
  
    <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black font-semibold text-[42px] leading-[50px] text-center'>Trending Products</h1>
  
    <div data-aos="zoom-in" data-aos-delay="300" className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10'>
  
      {
        products.map((item, index) => (
  
          <div id='product-box' key={index} className='flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative'>
            <img src={item.img} alt="" />
  
            <div id='icons' className='flex justify-center items-center gap-3 absolute top-[20px]'>
            <div className='bg-themePurple hover:bg-themeYellow hover:text-black rounded-full p-3 text-white'>
            <MdOutlineRemoveRedEye /> 
            </div>

            <div className="bg-themePurple hover:bg-themeYellow hover:text-black rounded-full p-3 text-white">
            <FaRegHeart />
            </div>
            <div className="bg-themePurple hover:bg-themeYellow hover:text-black rounded-full p-3 text-white" onClick={() => { addToCart(item); }}>
            <MdOutlineShoppingCart  />
            </div>
            </div>
            <h1 className='text-lg text-gray-400 font-semibold'>{item.category}</h1>
            <h1 className='text-xl text-black font-semibold'>{item.name}</h1>
            <h1 className='text-lg text-themePurple hover:text-themeYellow font-semibold'>{item.price}</h1>
           <div className='w-full mt-2'>
            <hr/>
             <div className='flex justify-between items-center gap-6 mt-3'>
              <div className='flex justify-center items-center gap-1'>
              <FaStar className='text-themePurple' />
              <FaStar className='text-themePurple' />
              <FaStar className='text-themePurple' />
              <FaStar className='text-themePurple' />
              <FaStar className='text-themePurple' />
              </div>
            <button className='bg-green-500 hover:bg-green-900 text-white py-2 px-4 rounded-lg font-semibold'>SALE 12%</button>
             </div>
           </div>
  
          </div>
        ))
      }
  
    </div>
    <button data-aos="zoom-in" data-aos-delay="400" className="bg-themePurple hover:bg-themeYellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]">VIEW MORE</button>
    <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} resetCart={resetCart} />
      {/* cartItems={cartItems} */}
    </div>
  )
}

export default ProductGrid
