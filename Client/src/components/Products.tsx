
import { Link } from 'react-router-dom';
import Product from '../components/Products';

interface Product {
  id: number;
  image: string;
  name: string;
  title: string;
  price: number;
  description: string;
  created_date: string;
  units_stock: number;
}

const Products: React.FC<{ product: Product }> = ({ product }) => {
  const handlerShow = () => {
    // Aquí puedes implementar la lógica para mostrar detalles del producto
  };

  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg mx-auto bg-white">
        <img className="w-40 h-40 object-cover" src={product.image} alt={product.name} />
        <div className="px-6 py-4">
          <h3 className="text-gray-900 font-bold text-xl mb-2">{product.title}</h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-base">${product.price}</p>
            <p className="text-gray-700 text-base">${product.units_stock}</p>
            <p className="text-gray-700 text-base">${product.created_date}</p>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link to={`/product/${product.id}`} className="bg-amber-400 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full">
            Ver Detalles
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products;
