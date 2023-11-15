import React, { useEffect, useState } from 'react'
import Product from './Product'
import Pagination from './Pagination'
import Dropdown from './Dropdown'
import SearchBar from './SearchBar'
import ProductModal from './ProductModal'
import priceRanges from '../priceRanges'

export default function ProductList() {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsLength, setProductsLength] = useState("")
  const [searchValue, setSearchValue] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)


  const [modalInfo, setModalInfo] = useState({
    id: '',
    images: [],
    title: '',
    description: '',
    price: '',
    errors: []
  })

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage

  const handleCategorySelectChange = async (id) => {
    if (id == 0) {
      getProducts()
      getProductsLength()
      return
    }

    const res = await fetch("https://api.escuelajs.co/api/v1/categories/" + id + "/products")

    if (!res.ok) throw new Error("Product by category fetch error")

    const data = await res.json()
    console.log(data.length)
    setProducts(data)
    setProductsLength(data.length)
  }

  const handlePriceSelectChange = async (id) => {
    if (id == 0) {
      getProducts()
      getProductsLength()
      return
    }

    const values = priceRanges.filter(item => item.id == id)[0].name.split('-')
    const minValue = values[0]
    const maxValue = values[1]

    const res = await fetch(`https://api.escuelajs.co/api/v1/products/?price_min=${minValue}&price_max=${maxValue}`)

    if (!res.ok) throw new Error("Product by price fetch error")

    const data = await res.json()
    setProducts(data)
    setProductsLength(data.length)
  }

  const getCategories = async (id) => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories")

      if (!res.ok) throw new Error("Categoriy fetch error")

      const data = await res.json()
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteProduct = async (id) => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products/" + id, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    getProducts()
    getProductsLength()
  }

  const handleUpdateProduct = async () => {
    console.log("modalInfo body", modalInfo)
    console.log("https://api.escuelajs.co/api/v1/products/" + modalInfo.id)

    try {
      let res = await fetch("https://api.escuelajs.co/api/v1/products/" + modalInfo.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(modalInfo)
      })

      if (res.status === 400) {
        const errorData = await res.json();
        const errorArr = errorData.message
        console.log(errorArr)
        setModalInfo({ ...modalInfo, errors: errorArr })
        return
      } else if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json()
      products.map(product => {
        if (product.id == modalInfo.id) {
          product.title = data.title
          product.description = data.description
          product.price = data.price
        }
      })



      setIsUpdateModalOpen(false)

    } catch (error) {
      console.log("hata", error)
    }
  };

  const handleAddProject = async () => {

    const body = { ...modalInfo, images: ["https://placeimg.com/640/480/any"], categoryId: 1 }

    const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })

    if (!res.ok) throw new Error("Error while creating product")

    const data = await res.json()
    setIsAddModalOpen(false)
  }

  const getProductsLength = async () => {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products?title=${searchValue}`)
      const data = await res.json()
      setProductsLength(data.length)
    } catch (error) {
      console.log(error)
    }
  }

  const getProducts = async () => {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${firstPostIndex}&limit=${postsPerPage}&title=${searchValue}`)
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getProducts()
    getProductsLength()
    getCategories()
  }, [])

  useEffect(() => {
    getProducts()
  }, [currentPage])

  useEffect(() => {
    const timer = setTimeout(() => {
      getProducts()
      getProductsLength()
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [searchValue])

  return (
    <>
      {isUpdateModalOpen && <ProductModal  operation={"update"} setModalInfo={setModalInfo} handleUpdateProduct={handleUpdateProduct} modalInfo={modalInfo} setIsUpdateModalOpen={setIsUpdateModalOpen} />}
      {isAddModalOpen && <ProductModal setModalInfo={setModalInfo} handleAddProduct={handleAddProject} modalInfo={modalInfo} setIsAddModalOpen={setIsAddModalOpen} />}

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full md:w-3/4 lg:w-1/2">
          <div className="relative  shadow-md sm:rounded-lg md:p-20">
            <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
              <SearchBar setCurrentPage={setCurrentPage} setSearchValue={setSearchValue} />
              <Dropdown defaultValue={"All Categories"} setCurrentPage={setCurrentPage} onSelectChange={handleCategorySelectChange} values={categories} />
              <Dropdown defaultValue={"All Prices"} setCurrentPage={setCurrentPage} onSelectChange={handlePriceSelectChange} values={priceRanges} />
            </div>
            <button  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" onClick={() => setIsAddModalOpen(true)}>Add Product</button>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span>Images</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product, index) => {
                    return <Product onDelete={handleDeleteProduct} setModalInfo={setModalInfo} setIsUpdateModalOpen={setIsUpdateModalOpen} key={index} product={product} />
                  })
                }
              </tbody>
            </table>
            <Pagination firstPostIndex={firstPostIndex} lastPostIndex={lastPostIndex} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPosts={productsLength} postsPerPage={postsPerPage} productsLength={115} />
          </div>
        </div>
      </div>
    </>
  )
}
