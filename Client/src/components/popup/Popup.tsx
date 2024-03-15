import { useState } from 'react';
import { RiStarLine } from 'react-icons/ri';
import { LiaCartPlusSolid } from 'react-icons/lia';
import { AiOutlineHeart } from 'react-icons/ai';
import { Categories } from '../../../api/category-data';

const Modal = ({ isOpen, category, onClose }) => {
  if (!isOpen || !category) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row bg-white">
      <div className="md:w-1/2 flex flex-col items-justique-center bg-white">
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <img
              src={category.image}
              alt={category.name}
              className="w-2/1 max-w-md mb-8 object-center "
            />
            <p className="text-lg font-bold text-center mb-5">{category.price}</p>
            <div className="flex justify-center">
          <a href="" aria-label="star" className="mr-2 text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          <a href="" aria-label="star" className="mr-2  text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          <a href="" aria-label="star" className="mr-2 text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          <a href="" aria-label="star" className="mr-2 text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          <a href="" aria-label="star" className="mr-2 text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
        </div>
        </div>
        </div>
      </div>

      <div className="px-8 md:w-1/2 flex flex-col items-center justify-center bg-white">
        <div className="container mx-auto mt-8">
          <p className="text-center font-bold mb-5 text-2xl">{category.name}</p>
          <p className="text-center text-1xl mb-5">{category.description}</p>
          <p className="text-lg font-bold text-center mb-5">{category.stock} unid</p>
        </div>
        <div className="mb-5 bg-black text-white border border-white py-2 px-8 rounded-md hover:border-black hover:text-yellow-500 hover:bg-white transition ease-in duration-500 ease-in-out">
          <button className="text justify-center">ADD TO CART</button>
        </div>
        <div className="flex justify-center">
          <a href="" aria-label="cart" className="mr-2 mb-2 md:mb-0 text-yellow-500 text-3xl">
            <LiaCartPlusSolid />
          </a>
          <a href="" aria-label="Heart" className="mr-2 mb-2 md:mb-0 text-yellow-500 text-3xl">
            <AiOutlineHeart />
          </a>
        </div>
      </div>
    </div>
  );
};

const Popup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const selectedCategory = Categories[selectedCategoryIndex];

  const openModal = (index) => {
    setSelectedCategoryIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex md:flex-row flex-col">
      {Categories.map((category, index) => (
        <div key={index} className="md:w-1/2 flex flex-col items-center">
          <img
            src={category.image}
            alt={category.name}
            className="w-full max-w-md mb-4 cursor-pointer"
            onClick={() => openModal(index)}
          />
           <p className="text-lg font-bold mb-2">{selectedCategory.price}</p>
        <div className="flex">
          <a href="" aria-label="star" className="mr-2 text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          <a href="" aria-label="star" className="mr-2  text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          <a href="" aria-label="star" className="mr-2 text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          <a href="" aria-label="star" className="mr-2 text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          <a href="" aria-label="star" className="mr-2 text-yellow-500 text-3xl">
            <RiStarLine />
          </a>
          </div>
        </div>
      ))}
      <Modal isOpen={modalIsOpen} category={selectedCategory} onClose={closeModal} />
    </div>
  );
};

export default Popup;
