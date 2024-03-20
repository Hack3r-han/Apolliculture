import React, { useState, useEffect } from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ showOrder, setShowOrder }) => {
  // Estado para almacenar los productos en el carrito
  const [products, setProducts] = useState([]);

  // Función para cargar los productos del carrito desde el almacenamiento local al montar el componente
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    setProducts(cartProducts);
  }, []);

  // Función para eliminar un producto del carrito
  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };

  return (
    <div className={`lg:col-span-2 fixed top-0 bg-amber-400 lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" : "right-full"}`}>
      <div className="relative pt-10 lg:pt-6 text-white p-8 h-full">
        <RiCloseLine onClick={() => setShowOrder(false)} className="absolute left-4 top- p-1 box-content text-gray-300 bg-[#262837] rounded-full text-xl" />
        <h1 className="text-2xl lg:text-xl text-center">Orders #151416</h1>
        <div>
          <div className="grid grid-cols-6 mb-4 p-4 text-xl lg:text-base lg:mr-6">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Listado de productos en el carrito */}
          <div className="h-[400px] md:h-[700px] lg:mt-1 lg:h-[400px] text-base lg:text-base overflow-scroll">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 w-30 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  <div className="col-span-4 flex items-center gap-3">
                    <img src={product.image} alt="Product" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm text-black">{product.name}</h5>
                      <p className="text-xs text-black">€{product.price}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-black">{product.quantity}</span>
                  </div>
                  <div>
                    <span className="text-black">${product.quantity * product.price}</span>
                  </div>
                </div>
                <div className="grid grid-cols-6 items-center">
                  <form className="col-span-5">
                    <input type="text" className="bg-amber-200 px-4 rounded-lg outline-none" placeholder="Order note..." />
                  </form>
                  <div>
                    <button className="border border-black p-1 rounded-lg" onClick={() => handleDeleteProduct(product.id)}>
                      <RiDeleteBin6Line className="text-black" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Resumen del carrito */}
        <div className="bg-amber-400 text-xl lg:text-base border border-white border-10 absolute w-full bottom-0 left-0 p-4 lg:p-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-black">Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-black">Subtotal</span>
            <span>€{products.reduce((acc, product) => acc + product.quantity * product.price, 0)}</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full h-10 lg:h-8 rounded-lg ">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;