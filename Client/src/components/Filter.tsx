import React from "react"


const Filter = () => {
    return (
      <div className="flex items-center justify-center flex-wrap bg-gray-200 font-bold underlinehover:backdrop-blur-[20px]">
        <div className='relative'>
          <div className='w-13 mt-10'>
            <img src="Group 24.png" alt='hexagon1'/>
          </div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mt-10">Mead</button>
          </div>
        </div>
  
        <div className='relative'>
          <div className='w-13  mb-20'>
            <img src="Group 24.png" alt='hexagon2'/>
          </div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mb-20">Honey</button>
          </div>
        </div>
  
        <div className='relative'>
          <div className='w-13 mt-10'>
            <img src="Group 24.png" alt='hexagon3'/>
          </div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mt-10">Wax</button>
          </div>
        </div>
  
        <div className='relative'>
          <div className='w-13  mb-20'>
            <img src="Group 24.png" alt='hexagon4'/>
          </div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className="text-center mb-20">Others</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Filter;
  






      

     
        
  