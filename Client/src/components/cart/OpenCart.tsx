import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

function OpenCart() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div>
      <button onClick={toggleOrders}
      className="bg-amber-400 text-2xl"><FaShoppingCart /></button>

      {/* Mostrar el componente Card solo si showOrder es true */}
      {showOrder && (
        <div>
          <Cart showOrder={showOrder} setShowOrder={setShowOrder} />
          {/* Botón "Cerrar" eliminado */}
        </div>
      )}

      {/* <ProductList /> */}
    </div>
  );
}

export default OpenCart;