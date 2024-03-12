const Filter = () => {
    return (
      <div className=" flex items-center justify-center flex-wrap font-bold underlinehover:backdrop-blur-[20px] md:grid-cols-2">
        <div className='relative'>
          <div className='w-13 mt-10 '>
            <img src="Group 24.png" alt='hexagon1'/>
          </div>
          <div className='text-white hover:text-black transition duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mt-10">HONEY</button>
          </div>
        </div>
  
        <div className='relative'>
          <div className='w-13  mb-20'>
            <img src="Group 24.png" alt='hexagon2'/>
          </div>
          <div className='text-white hover:text-black transition duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mb-20">HEALTH</button>
          </div>
        </div>
  
        <div className='relative'>
          <div className='w-13 mt-10'>
            <img src="Group 24.png" alt='hexagon3'/>
          </div>
          <div className='text-white hover:text-black transition duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mt-10">HOME DECOR</button>
          </div>
        </div>
  
        <div className='relative'>
          <div className='w-13  mb-20'>
            <img src="Group 24.png" alt='hexagon4'/>
          </div>
          <div className='text-white hover:text-black transition duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mb-20">BEEKEEPING</button>
          </div>
        </div>
        <div className='relative'>
          <div className='w-13 mt-10'>
            <img src="Group 24.png" alt='hexagon3'/>
          </div>
          <div className='text-white hover:text-black transition duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mt-10">AND MORE!</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Filter;






      

     
        
  