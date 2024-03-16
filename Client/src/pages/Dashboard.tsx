import { useState, useEffect } from 'react';
import AddProducts from "../components/addproducts/AddProducts";
import backgroundImage from "../assets/images/BgLogin.svg";
import productsData from "../../api/mockProducts.json";
import cardImage from "../assets/images/HoneySticker.jpeg";

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    units_stock: number;
    user_id: string;
}

const Dashboard = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);

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
                                    <p><strong>Product:</strong> <input type="text" className="bg-amber-200" value={product.name} /></p>
                                    <p><strong>Price:</strong> $<input type="number" className="bg-amber-200" value={product.price} /></p>
                                    <p><strong>Stock:</strong> <input type="number" className="bg-amber-200" value={product.units_stock} /></p>
                                </div>
                            </div>
                            <div className="p-4 flex justify-end">
                                <button type="button" className="mr-3 text-sm bg-amber-400 hover:bg-amber-300 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Edit</button>
                                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
