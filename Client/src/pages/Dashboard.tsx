import { useState, useEffect } from 'react';
import AddProducts from "../components/addproducts/AddProducts";
import EditProducts from "../components/editproducts/EditProducts";
import backgroundImage from "../assets/images/BgLogin.svg";
import cardImage from "../assets/images/HoneySticker.jpeg";

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    units_stock: number;
    user_id: string;
}

const Dashboard = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [editProduct, setEditProduct] = useState<Product | null>(null);

    // FETCH PRODUCTS
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:3000/Products'); //END POINT
            if (response.ok) {
              const data = await response.json();
              setProducts(data);
            } else {
              throw new Error('Error obtaining your products.');
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchProducts();
      }, []);

    
    // HANDLE EDIT
    const handleEdit = (product: Product) => {
        setEditProduct(product);
    };

    // HANDLE DELETE
    const handleDelete = async (productId: string) => {
        try {
            const response = await fetch(`http://localhost:3000/Products/${productId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // If deletion is successful, update the products list
                setProducts(products.filter(product => product.id !== productId));
            } else {
                throw new Error('Failed to delete the product.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    // RENDER ON SCREEN
    return (
        <div style={{backgroundImage: `url(${backgroundImage})`}}>
            <h1 className="text-center text-3xl font-bold my-10">PRODUCTS LIST</h1>
            <AddProducts />
            <div className="px-20 py-4 overflow-x-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product: Product) => (
                        <div key={product.id} className="bg-amber-200 border-2 border-amber-300 rounded">
                            <div className="p-4">
                                <div className="flex justify-center md:justify-start mb-4">
                                    <img className="w-16 h-16 rounded-full" src={cardImage} alt="" />
                                </div>
                                <div>
                                    <p><strong>Product:</strong> {product.name}</p>
                                    <p><strong>Price:</strong> ${product.price}</p>
                                    <p><strong>Stock:</strong> {product.units_stock}</p>
                                </div>
                            </div>
                            <div className="p-4 flex justify-end">
                                <button
                                    className="mr-3 text-sm bg-amber-400 hover:bg-amber-300 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => handleEdit(product)}
                                >
                                    Edit
                                </button>
                                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {editProduct && <EditProducts product={editProduct} onClose={() => setEditProduct(null)} />}
        </div>
    );
};

export default Dashboard;
