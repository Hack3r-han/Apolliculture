import React from "react";
import SeeProduct from "../seeproduct/SeeProduct";
import OpenCart from "../cart/OpenCart";

interface ProductProps {
  image: string;
  name: string;
  description: string;
  price: number;
  units_stock: number;
}

const Product: React.FC<ProductProps> = ({
  image,
  name,
  description,
  price,
  units_stock,
}) => {
  return (
    <div className="bg-White p-8  flex flex-col items-center justify-center gap-2 text-center text-black border mt-5 border-amber-400 border-2 ml-2 mr-2 lg:h-80">
      <img
        src={image}
        className="w-60 h-60 object-cover lg:w-60 lg:h-60 -mt-16 rounded-full bg-black border-2 border-amber-400"
        alt=""
      />
      <div className="flex mt-1 text-xl lg:flex lg:text-base">
        <p className="text-amber-500  ">{price}€</p>
        
      </div>
      <h6 className="text-2xl lg: text-base mb-3 text-bold ">{name}</h6>
      <SeeProduct
        image={image}
        name={name}
        description={description} 
        price={price}
        units_stock={units_stock}
      />
    </div>
  );
};

export default Product;