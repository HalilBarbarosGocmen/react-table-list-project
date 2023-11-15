import React, { useEffect, useState } from "react";

export default function ProductModal({
  setIsUpdateModalOpen,
  setIsAddModalOpen,
  modalInfo,
  setModalInfo,
  handleUpdateProduct,
  handleAddProduct,
  operation,
}) {
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (statusMessage) {
      const timeoutId = setTimeout(() => {
        setStatusMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [statusMessage]);

  const validateForm = () => {
    if (!modalInfo.title || !modalInfo.description || !modalInfo.price) {
      setStatusMessage("Lütfen tüm alanları doldurun.");
      return false;
    }

    return true;
  };

  const handleUpdateProductWithStatus = async () => {
    try {
      if (!validateForm()) return;

      setStatusMessage("Ürün güncelleniyor...");
      await handleUpdateProduct();
      setStatusMessage("Ürün başarıyla güncellendi!");
      setTimeout(() => {
        setIsUpdateModalOpen(false);
      }, 2000);
    } catch (error) {
      setStatusMessage("Ürün güncelleme hatası.");
    }
  };

  const handleAddProductWithStatus = async () => {
    try {
      if (!validateForm()) return;

      setStatusMessage("Ürün ekleniyor...");
      await handleAddProduct();
      setStatusMessage("Ürün başarıyla eklendi!");
      setTimeout(() => {
        setIsAddModalOpen(false);
      }, 2000);
    } catch (error) {
      setStatusMessage("Ürün ekleme hatası.");
    }
  };

  return (
    <>
      {operation === "update" ? (
        <div className="z-10 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div id="modal" className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Ürün Düzenle</h2>
            <img
              src={
                modalInfo?.images[0] ||
                "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              }
              onError={(e) => {
                e.target.src =
                  "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
              }}
              className="w-full h-48 object-cover mb-4"
              alt="Product"
            />
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full border p-2 rounded"
                  value={modalInfo.title}
                  onChange={(e) => {
                    setModalInfo({
                      ...modalInfo,
                      title: e.target.value,
                      errors: [],
                    });
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full border p-2 rounded"
                  value={modalInfo.description}
                  onChange={(e) => {
                    setModalInfo({
                      ...modalInfo,
                      description: e.target.value,
                      errors: [],
                    });
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                >
                  Price:
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="w-full border p-2 rounded"
                  value={modalInfo.price}
                  onChange={(e) => {
                    setModalInfo({
                      ...modalInfo,
                      price: e.target.value,
                      errors: [],
                    });
                  }}
                />
              </div>
              <div>
                {modalInfo?.errors?.map((error, index) => (
                  <div
                    key={index}
                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    <span className="font-medium">Error!</span> {error}
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleUpdateProductWithStatus}
                  type="button"
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Değişiklikleri Kaydet
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsUpdateModalOpen(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              Kapat
            </button>
          </div>
        </div>
      ) : (
        <div className="z-10 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div id="modal" className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Ürün Ekle</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full border p-2 rounded"
                  onChange={(e) =>
                    setModalInfo({ ...modalInfo, title: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full border p-2 rounded"
                  onChange={(e) =>
                    setModalInfo({
                      ...modalInfo,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-gray-700 dark:text-gray-300 font-semibold mb-2"
                >
                  Price:
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  className="w-full border p-2 rounded"
                  onChange={(e) =>
                    setModalInfo({ ...modalInfo, price: e.target.value })
                  }
                />
              </div>
              <div>
                {modalInfo?.errors?.map((error, index) => (
                  <div
                    key={index}
                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    <span className="font-medium">Error!</span> {error}
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleAddProductWithStatus}
                  type="button"
                  className="bg-green-500 text-white p-2 mb-2 rounded"
                >
                  Ürün Ekle
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              Kapat
            </button>
          </div>
        </div>
      )}

      {statusMessage && (
        <div className="fixed top-0 right-0 m-4 p-4 bg-blue-500 text-white rounded-md shadow-lg">
          {statusMessage}
        </div>
      )}
    </>
  );
}
