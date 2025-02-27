import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { FaXmark, FaBars, FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const NavItems = [
    { link: 'Home', path: 'hero' },
    { link: 'About', path: 'about' },
    { link: 'Products', path: 'products' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <>
      

      <nav className='w-full bg-gray-900 text-white flex justify-between items-center lg:px-16 px-6 py-3 sticky top-0 z-50 shadow-md'>
        <h1 className='text-white font-bold lg:text-2xl text-xl italic'>FLIPIT Shop</h1>
        
        <ul className='lg:flex hidden justify-center items-center gap-8'>
          {NavItems.map(({ link, path }, index) => (
            <Link 
              key={index} 
              to={path} 
              spy={true} 
              offset={-80} 
              smooth={true} 
              className='text-white text-sm uppercase font-semibold cursor-pointer px-3 py-2 hover:text-yellow-400 transition duration-300'
            >
              {link}
            </Link>
          ))}
        </ul>
        
        <div className='flex items-center gap-4'>
          <FaSearch className='size-[18px] cursor-pointer hover:text-yellow-400 transition duration-300' />
          <IoPerson className='size-[18px] cursor-pointer hover:text-yellow-400 transition duration-300' />
          <FaHeart className='size-[18px] cursor-pointer hover:text-yellow-400 transition duration-300' />
          <div className='relative'>
            <FaShoppingCart className='size-[18px] cursor-pointer hover:text-yellow-400 transition duration-300'  />
            <span className='bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full absolute -top-2 -right-2'>2</span>
          </div>
        </div>

        <div className='lg:hidden flex items-center ml-4' onClick={toggleMenu}>
          {isMenuOpen ? <FaXmark className='text-white text-2xl cursor-pointer' /> : <FaBars className='text-white text-2xl cursor-pointer' />}
        </div>
      </nav>

      {isMenuOpen && (
        <div className='w-full bg-gray-900 text-white flex flex-col items-center py-5 absolute top-14 left-0 z-50 lg:hidden shadow-md'>
          {NavItems.map(({ link, path }, index) => (
            <Link 
              key={index} 
              to={path} 
              spy={true} 
              offset={-80} 
              smooth={true} 
              onClick={closeMenu}
              className='text-white text-sm uppercase font-semibold cursor-pointer px-4 py-2 hover:text-yellow-400 transition duration-300 w-full text-center'
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import { FaBars, FaSearch, FaShoppingCart,FaBook } from 'react-icons/fa'; // Import icons

// const Navbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
   
//   };

//   return (
//     <nav className="bg-gray-800 p-4 sticky top-0 z-50 transition-all duration-300 ">
//       <div className="container mx-auto flex flex-wrap items-center justify-between">
//         <Link to="/" className="text-white text-2xl font-bold transition-transform duration-300 hover:scale-105">
//         <FaBook className='text-themePurple'/>
//           FLIPIT
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMobileMenu}
//           className="lg:hidden text-white hover:text-gray-300 focus:outline-none"
//         >
//           <FaBars className="h-6 w-6" />
//         </button>

//         {/* Search Bar */}
//         <div className="flex items-center mt-4 lg:mt-0 lg:w-1/3 w-full">
//           <div className="relative w-full">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <FaSearch className="text-gray-500" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-gray-700 text-white border border-gray-600 rounded-lg pl-10 pr-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>
//         </div>


//         {/* Navigation Links */}
//         <div
//           className={`${
//             isMobileMenuOpen ? 'block' : 'hidden'
//           } lg:flex lg:items-center lg:w-auto w-full lg:block transition-all duration-300`}
//           id="mobile-menu"
//         >
//           <ul className="flex flex-col lg:flex-row lg:justify-end lg:items-center lg:gap-8 gap-4 mt-4 lg:mt-0 text-base font-medium text-white">
//             <li>
//               <Link
//                 to="/"
//                 className="hover:text-gray-300 transition-colors duration-300"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="hover:text-gray-300 transition-colors duration-300"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/products"
//                 className="hover:text-gray-300 transition-colors duration-300"
//               >
//                 Product
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/testimonials"
//                 className="hover:text-gray-300 transition-colors duration-300"
//               >
//                 Testimonials
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="hover:text-gray-300 transition-colors duration-300"
//               >
//                 Contact
//               </Link>
//             </li>

//             {/* Cart Icon */}
//             <li>
//               <Link to="/cart" className="text-white hover:text-gray-300 transition-colors duration-300">
//                 <FaShoppingCart className="h-6 w-6" />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;