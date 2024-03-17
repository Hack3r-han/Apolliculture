import React, { useState, useEffect } from 'react';
import Product from '../components/Products/Products';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]); // Estado para almacenar los productos

  useEffect(() => {
    // Función para obtener los productos de la API falsa
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/Products'); // Corrected endpoint URL
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error('Error al obtener los productos');
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Llamar a la función para obtener los productos al montar el componente
    fetchProducts();
  }, []);

  return (
    <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
    
      {products.map(product => (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          units_stock={product.units_stock} 
        />
      ))}
    </div>
  );
};

export default ProductList;
