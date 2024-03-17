import React from "react";
import SeeProduct from "../seeproduct/SeeProduct";

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
    <div className="bg-White p-8  flex flex-col items-center gap-2 text-center text-black border mt-16 border-amber-400 border-2 ml-2 mr-2 ">
      <img
        src={image}
        className="w-60 h-60 object-cover lg:w-60 lg:h-60 -mt-16 rounded-full bg-black border-2 border-amber-400"
        alt=""
      />
      <div className="flex space-x-24 mt-4 text-xl ml-6 lg:flex">
        <span className="text-amber-500">{price}€</span>
        <p className="text-amber-500">{units_stock} units</p>
      </div>
      <h6 className="text-2xl lg: text-xl  text-bold ">{name}</h6>
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
