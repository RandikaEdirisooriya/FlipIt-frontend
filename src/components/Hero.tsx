import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookOneImage from '../assets/imagetwo.jpg';
import BookTwoImage from '../assets/secondbook.jpg';
import BookThreeImage from '../assets/thirdbook.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div id='hero' className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
      <Slider className='w-full' {...settings}>
        <div>
          <div
            className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center'
            style={{ backgroundImage: `url(${BookOneImage})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className='text-themeYellow border-2 rounded-lg border-themeYellow px-6 py-2 text-xl inline-block gap-3'
            >
              Get 30% off on all book purchases
            </h1>

            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className='text-white  text-shadow-lg lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'
            >
              FLIPIT <br /> BOOKS
            </h1>

            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className='text-white text-2xl'
            >
              100% Trusted <span className='text-themeYellow font-semibold'>Book Collection</span>
            </h1>

            <button
              data-aos="zoom-in"
              data-aos-delay="100"
              className='bg-themeYellow px-6 py-3 rounded-lg hover:bg-themePurple hover:text-white text-black font-semibold w-auto'
            >
              ONLINE COLLECTION
            </button>
          </div>
        </div>

        <div>
          <div
            className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center'
            style={{ backgroundImage: `url(${BookTwoImage})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className='text-themeYellow border-2 rounded-lg border-themeYellow px-6 py-2 text-xl inline-block gap-3'
            >
              Get 30% off on fiction books
            </h1>

            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className='text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'
            >
              Fiction <br /> Collection
            </h1>

            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className='text-white text-2xl'
            >
              100% Trusted <span className='text-themeYellow font-semibold'>Best-Selling Books</span>
            </h1>

            <button
              data-aos="zoom-in"
              data-aos-delay="100"
              className='bg-themeYellow px-6 py-3 rounded-lg text-black font-semibold w-auto'
            >
              ONLINE COLLECTION
            </button>
          </div>
        </div>

        <div>
          <div
            className='w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center'
            style={{ backgroundImage: `url(${BookThreeImage})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className='text-themeYellow border-2 rounded-lg border-themeYellow px-6 py-2 text-xl inline-block gap-3'
            >
              Get 30% off on mystery novels
            </h1>

            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className='text-black lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'
            >
              Mystery <br /> Novels
            </h1>

            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className='text-black text-2xl'
            >
              100% Trusted <span className='text-themeYellow font-semibold'>Thriller Books</span>
            </h1>

            <button
              data-aos="zoom-in"
              data-aos-delay="100"
              className='bg-themeYellow px-6 py-3 rounded-lg text-black font-semibold w-auto'
            >
              ONLINE COLLECTION
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
