import { useState } from "react";
import Modal from "react-modal";
import backgroundImage from "../../assets/images/Bees_bg.jpeg";

Modal.setAppElement("#root");

const AddProducts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    units_stock: 0,
    image: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("New Product:", newProduct);
    
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newProduct,
          price: Number(newProduct.price),
          units_stock: Number(newProduct.units_stock),
          user_id: "1712b03a-e6b5-11ee-9c4c-bee74cc5f98e",
        }),
      });
      if (response.ok) {
        console.log("Product added successfully");
        
        setNewProduct({
          name: "",
          description: "",
          price: 0,
          units_stock: 0,
          image: ""
        });
        setModalIsOpen(false);
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <section>
      <button
        className="block mx-auto px-4 py-2 rounded bg-amber-400 text-lg text-white font-bold mb-6"
        onClick={() => setModalIsOpen(true)}
      >
        ADD PRODUCT
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Add Products Modal"
        style={{
          content: {
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${backgroundImage})`,
          },
        }}
      >
        <div className="my-10 max-w-md w-full mx-auto p-6 bg-amber-200 rounded-lg border-4 border-white shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                name="name"
                value={newProduct.name}
                onChange={handleChange}
                placeholder="Blossom Honey..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                name="description"
                value={newProduct.description}
                onChange={handleChange}
                placeholder="With its enchanting aroma and delightful flavour, this golden elixir is a testament to the meticulous craftsmanship of our beekeepers..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">
                Price
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                name="price"
                value={newProduct.price}
                onChange={handleChange}
                placeholder="$10"
              />
            </div>

            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">
                Stock
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                name="units_stock"
                value={newProduct.units_stock}
                onChange={handleChange}
                placeholder="20"
              />
            </div>

            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">
                Image
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
                name="image"
                value={newProduct.image}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="block mx-auto px-4 py-2 rounded bg-amber-400 text-lg text-white font-bold mb-6"
            >
              ADD PRODUCT
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default AddProducts;
