import React from "react";
import Popup from "../Popup"
import Root from "../../router/Root";

interface ProductProps {
  image: string;
  name:string;
  //description: string;
  price: number;
  units_stock: number;
}

const Product: React.FC<ProductProps> = (props) => {
  const { image,name, price, units_stock } = props;

  return (
  
    <div className="bg-White p-8  flex flex-col items-center gap-2 text-center text-black border mt-16 border-amber-400 border-2 ml-2 mr-2 ">
      <img
        src={image}
        className="w-60 h-60 object-cover lg: w-30 h-40 -mt-16 rounded-full bg-black border-2 border-amber-400"
        alt=""
      />
      
      <div className="flex space-x-24 mt-4 text-xl ml-6  lg: flex">
      <span className="text-amber-500">{price}€</span>
      <p className="text-amber-500">{units_stock} units</p>
      </div>
      <h6 className="text-2xl lg: text-xl  text-bold ">{name}</h6>
      <button className="bg-amber-400 text-black border border-white py-2 px-4 rounded-md hover:boder-transparent hover:text-white">
        View details
      </button>
      
   
      </div>
     

  )
};

export default Product;