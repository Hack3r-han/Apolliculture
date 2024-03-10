import { useState } from "react";
import Modal from "react-modal";
import backgroundImage from "../assets/images/Bees_bg.jpeg";

Modal.setAppElement("#root");

const AddProducts = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
          <form>
            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
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
                placeholder="$10"
              />
            </div>

            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">
                Category
              </label>
              <select
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
              >
                <option value="honey">Honey</option>
                <option value="health">Health</option>
                <option value="home">Home Decor</option>
                <option value="beekeeping">Beekeeping</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-amber-400 font-semibold mb-2">
                Image
              </label>
              <input
                type="file"
                className="w-full px-3 py-2 border rounded-lg bg-yellow-100 focus:border-blue-500"
                required
              />
            </div>
          </form>

          <button
            className="block mx-auto px-4 py-2 rounded bg-amber-400 text-lg text-white font-bold mb-6"
            onClick={() => setModalIsOpen(false)}
          >
            ADD PRODUCT
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default AddProducts;
