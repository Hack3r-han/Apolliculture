import { useState } from "react";
import Modal from "react-modal";
import backgroundImage from "../../assets/images/Bees_bg.jpeg";

interface EditProductsProps {
  product: Product; 
  onClose: () => void;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  units_stock: number;
  image: string;
}

Modal.setAppElement("#root");

const EditProducts: React.FC<EditProductsProps> = ({ product, onClose }) => {
  const [updateProduct, setUpdatedProduct] = useState<Product>(product);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        const response = await fetch(`http://localhost:3000/Products/${product.id}`, { //END POINT
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateProduct),
        });

        if (response.ok) {
            console.log('Product updated successfully');
            onClose(); 
        } else {
            throw new Error('Failed to update product');
        }
    } catch (error) {
        console.error('Error updating product:', error);
    }
};


  return (
    <section>
      <Modal
        isOpen={true}
        onRequestClose={() => onClose()}
        contentLabel="Edit Products Modal"
        style={{
          content: {
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${backgroundImage})`,
          },
        }}
      >
        <div className="my-10 max-w-md w-full mx-auto p-6 bg-amber-200 rounded-lg border-4 border-white shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                value={updateProduct.name}
                onChange={(e) => setUpdatedProduct({ ...updateProduct, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">Description</label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                value={updateProduct.description}
                onChange={(e) => setUpdatedProduct({ ...updateProduct, description: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">Price</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                value={updateProduct.price}
                onChange={(e) => setUpdatedProduct({ ...updateProduct, price: parseFloat(e.target.value) })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">Stock</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                value={updateProduct.units_stock}
                onChange={(e) => setUpdatedProduct({ ...updateProduct, units_stock: parseInt(e.target.value) })}
              />
            </div>
            <button
              type="submit"
              className="block mx-auto px-4 py-2 rounded bg-amber-400 text-lg text-white font-bold mb-6"
            >
              EDIT PRODUCT
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default EditProducts;
