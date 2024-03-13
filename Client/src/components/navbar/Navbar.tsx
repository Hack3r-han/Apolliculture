import { Link } from "react-router-dom";
import { LiaCartPlusSolid } from 'react-icons/lia';
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
    return (
  
      <nav className="bg-amber-400 py:5 lg:py-5 relative ">
        <div className="container mx-auto flex px-0 xl:px-0" >
  
          <div className='flex flex-grow'>
            <img src="../src/assets/images/logo.png" alt='logo' className="w-40 h-auto md-6  lg:w-60 lg:mt-[-35px] " />
          </div>
          <div className='lg:hidden'>
            <img src="menu-line.png" alt="menu" className='W-20 h-10 mt-9 mr-4 hover:bg-blackbg-amber-300 text-black border border-white rounded-md hover:boder-transparent hover:text-yellow-500 hover:bg-white transition duration-500 ease-in-out'/>
          </div>
  
          <div className="lg:flex hidden flex-grow justify-between">
  
            <div className='flex justify-center item-center space-x-12 mt-8 '>
            <Link to="/Home" className="text-white hover:text-black transition duration-500 ease-in-out">HOME</Link>
            <Link to="/Home#about" className="text-white hover:text-black transition duration-500 ease-in-out">ABOUT US</Link>
              <a href="#" className="text-white hover:text-black transition duration-500 ease-in-out">PRODUCTS</a>
              <a href="#contact" className="text-white hover:text-black transition duration-500 ease-in-out">CONTACT US</a>
            </div>
            <div className=' mt-9 gap-4 space-x-4'>
            <Link to="/dashboard" className=" bg-amber-300 text-black border border-white py-2 px-5 rounded-md hover:border-transparent hover:text-yellow-500 hover:bg-white transition ease-in duration-500">Admin</Link>
            <Link to="/loginregister" className=" bg-amber-300 text-black border border-white py-2 px-5 rounded-md hover:border-transparent hover:text-yellow-500 hover:bg-white transition ease-in duration-500">Sign in</Link>
            </div>
          </div>
        </div>
        <div className='gap-4 space-x-1 flex justify-center lg:mt-[-60px]'>
        <a href="" aria-label="cart" className=" mr-2 mb-8 text-white-500 text-3xl "><LiaCartPlusSolid /></a>
          <a href="" aria-label="inglass" className="  text-white-500 text-2xl"><FaMagnifyingGlass /></a>
          <input  className=" mb-5 bg-white border border-amber-500 text-black w-2/12 lg:w-4/12 h-9 rounded-3xl px-4"type='text' placeholder="Search..." />
          </div>
      </nav>
    );
  };
  
  export default Navbar;