import  { useState, useEffect } from "react";

function Cart() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Obtener datos de la API al montar el componente
    fetch("http://localhost:3000/Products")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex(item => item.id === product.id);

    if (itemIndex === -1) {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      newCart.push({ ...product, quantity: 1 });
    } else {
      // Si el producto ya está en el carrito, aumentar la cantidad
      newCart[itemIndex].quantity++;
    }

    // Actualizar el carrito y calcular el total
    setCart(newCart);
    calculateTotal(newCart);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    // Actualizar el carrito y calcular el total
    setCart(newCart);
    calculateTotal(newCart);
  };

  const calculateTotal = (cart) => {
    const totalPrice = cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
    setTotal(totalPrice);
  };

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
      
      <h2>Carrito</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} - Cantidad: {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
