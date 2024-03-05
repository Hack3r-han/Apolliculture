import React from 'react';


const Navbar = () => {
  return (

    <nav className="bg-amber-400 py:5 lg:py-5 relative ">
      <div className="container mx-auto flex px-1 xl:px-0" >

        <div className='flex flex-grow'>
          <img src="Group 36.png" alt='logo' className="w-40 h-auto md-6  lg:w-60 h-auto lg:mt-[-35px] " />
        </div>
        <div className='lg:hidden'>
          <img src="menu-line.png" alt="menu" className='W-20 h-10 mt-9 mr-4 hover:bg-blackbg-amber-300 text-black border border-white rounded-md hover:boder-transparent hover:text-yellow-500 hover:bg-white transition ease-in duration-500 ease-in-out'/>
        </div>

        <div className="lg:flex hidden flex-grow justify-between">

          <div className='item-center justify-center flex space-x-16 mt-3 ml-4'>
            <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out">HONEY</a>
            <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out">HEALTH</a>
            <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out">HOME</a>
            <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out">BEEKEEPING</a>

          </div>
          <div className='px-9 mt-9'>
            <a href="#" className="bg-amber-300 text-black border border-white py-2 px-5 rounded-md hover:boder-transparent hover:text-yellow-500 hover:bg-white transition ease-in duration-500 ease-in-out mr-3">Admin</a>
            <a href="#" className="bg-amber-300 text-black border border-white py-2 px-5 rounded-md hover:boder-transparent hover:text-yellow-500 hover:bg-white transition ease-in duration-500 ease-in-out">Sign in</a>
          </div>
        </div>
      </div>
      <div className='flex justify-center lg:mt-[-60px]'>
        <input className="bg-white border border-amber-500 text-black w-8/12 h-7  lg:w-6/12 h-9 rounded-3xl px-4" type='text' placeholder="Search..." />
        </div>
    </nav>
  );
};

export default Navbar;