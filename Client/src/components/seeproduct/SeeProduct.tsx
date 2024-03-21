import React, { useState } from "react";
import Modal from "react-modal";
import { RiStarLine } from "react-icons/ri";
import { LiaCartPlusSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";

interface SeeProductProps {
  image: string;
  name: string;
  description: string;
  price: number;
  units_stock: number;
}

Modal.setAppElement("#root");

const SeeProduct: React.FC<SeeProductProps> = ({
  image,
  name,
  description,
  price,
  units_stock,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const product = {
    image,
    name,
    description,
    price,
    units_stock,
  };

  const AddProduct = () => {
    // Obtiene la lista actual de productos del carrito del almacenamiento local
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");

    // Agrega el nuevo producto a la lista de productos del carrito
    const updatedCartProducts = [...cartProducts, product];

    // Guarda la lista actualizada en el almacenamiento local
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
  };

  return (
    <section>
      <button
        className="bg-amber-400 text-black border border-white py-2 px-4 rounded-md hover:border-transparent hover:text-white"
        onClick={() => setModalIsOpen(true)}
      >
        View Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="See Product Modal"
      >
        <div className="flex flex-col md:flex-row bg-white">
          <div className="md:w-1/2 flex flex-col items-justique-center bg-white">
            <div>
              <img
                src={image}
                alt={name}
                className="w-2/1 max-w-md mb-8 object-center "
              />
              <p className="text-lg font-bold text-center mb-5">{price}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <a
                    key={index}
                    href=""
                    aria-label="star"
                    className="mr-2 text-yellow-500 text-3xl"
                  >
                    <RiStarLine />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="px-8 md:w-1/2 flex flex-col items-center justify-center bg-white">
            <div className="container mx-auto mt-8">
              <p className="text-center font-bold mb-5 text-2xl">{name}</p>
              <p className="text-lg font-bold text-center mb-5">{units_stock} units</p>
              <p className="text-lg text-center mb-5">{description}</p>
            </div>
            <div className="mb-5 bg-black text-white border border-white py-2 px-8 rounded-md hover:border-black hover:text-yellow-500 hover:bg-white transition ease-in duration-500 ease-in-out">
              <button className="text justify-center"
              onClick={AddProduct}>ADD TO CART</button>
            </div>
            <div className="flex justify-center">
              <a
                href=""
                aria-label="cart"
                className="mr-2 mb-2 md:mb-0 text-yellow-500 text-3xl"
              >
                <LiaCartPlusSolid />
              </a>
              <a
                href=""
                aria-label="Heart"
                className="mr-2 mb-2 md:mb-0 text-yellow-500 text-3xl"
              >
                <AiOutlineHeart />
              </a>
            </div>
          </div>
        </div>
        <button
          className="block mx-auto px-4 py-2 rounded bg-amber-400 text-lg text-white font-bold mb-6"
          onClick={() => setModalIsOpen(false)}
        >
          GO BACK
        </button>
      </Modal>
    </section>
  );
};

export default SeeProduct;
