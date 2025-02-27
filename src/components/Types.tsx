import React from 'react'
import { useEffect } from 'react'
import Banner1 from '../assets/bannerBookOne.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/bannerthree.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Types = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            offset: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <div id='about' className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
            <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${Banner1})` }}>
                <h1 className='text-themeYellow border rounded-lg border-themeYellow px-6 py-2 text-lg'>50% Off</h1>
                <h1 className='text-4xl text-end text-white font-semibold'>Bestselling <br /> Books</h1>
                <button className="bg-themeYellow hover:bg-themePurple hover:text-white px-6 py-3 rounded-lg text-black font-semibold">SHOP NOW</button>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${Banner2})` }}>
                <h1 className='text-themeYellow border rounded-lg border-themeYellow px-6 py-2 text-lg'>Limited Offer</h1>
                <h1 className='text-4xl text-end text-white font-semibold'>Classic <br /> Literature</h1>
                <button className="bg-themeYellow hover:bg-themePurple hover:text-white px-6 py-3 rounded-lg text-black font-semibold">SHOP NOW</button>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${Banner3})` }}>
                <h1 className='text-themeYellow border rounded-lg border-themeYellow px-6 py-2 text-lg'>New Arrivals</h1>
                <h1 className='text-4xl text-end text-white font-semibold'>Latest <br /> Releases</h1>
                <button className="bg-themeYellow hover:bg-themePurple hover:text-white px-6 py-3 rounded-lg text-black font-semibold">SHOP NOW</button>
            </div>
        </div>
    );
}

export default Types;
