import React from 'react';


const Navbar = () => {
  return (
    
    <nav className="bg-yellow-400 p-3 py-7 relative ">
      <div className="flex h-8 items-center justify-between mt-4" >
      
          <div className='w-64 h-auto mt-9'>
          <img src="Group 34.png" alt='logo'/>
       </div>

        <div className="flex flex-grow ">
       <input className= "m bg-white border-amber-500 text-black border mx-auto w-7/12 rounded-3xl " type='text' placeholder="    Search..."/>

       <div className="flex justify-center items center mr-7">
          <a href="#" className="bg-amber-300 text-black border border-white border-1 py-2 px-5 rounded-md hover:boder-transparent hover:text-yellow-500 hover:bg-white mt4 lg:mt-0 transition ease-in duration-500 ease-in-out lg:mr-3">Admin</a>
          <a href="#" className="bg-amber-300 text-black border border-white border-1 py-2 px-5 rounded-md hover:boder-transparent hover:text-yellow-500 hover:bg-white mt4 lg:mt-0 transition ease-in duration-500 ease-in-out lg:mr-3">Sign in</a>
        </div>
        </div>
        

        </div>
        <div className='item-center justify-center flex space-x-14 mt-5'>
          
            <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out lg:mr-7 ">HONEY</a>
            <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out lg:mr-7">HEALTH</a>
            <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out">HOME</a>
            <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out">BEEKEEPING</a>
        </div>
    </nav>
  );
};

export default Navbar;
