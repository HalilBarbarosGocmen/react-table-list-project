import React, { useState } from 'react';

export default function Product({ setIsUpdateModalOpen, setModalInfo, product, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = async () => {
    setIsDeleting(true);

    try {
      await onDelete(product.id);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEditClick = () => {
    setIsUpdateModalOpen(true);

    setModalInfo({
      id: product.id,
      images: product.images,
      title: product.title,
      description: product.description,
      price: product.price,
      errors: []
    });
  };

  return (
    <tr className={`transition-opacity duration-1000 ${isDeleting ? 'opacity-0' : 'opacity-100'} bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}>
      <td className="p-4">
      <img
              src={product.images[0] ? product.images[0] : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
              onError={(e) => {
                e.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
              }}
              className="w-full h-48 object-cover mb-4"
              alt="Product"
            />
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.title}
      </td>
      <td className="px-6 py-4">
        <div>
          {product.description}
        </div>
      </td>
      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {product.price}
      </td>
      <td className="px-6 py-4">
        <button onClick={handleEditClick} className="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</button>
        <button disabled={isDeleting} onClick={handleDeleteClick} className="font-medium text-red-600 dark:text-red-500 hover:underline ">Remove</button>
      </td>
    </tr>
  );
}
