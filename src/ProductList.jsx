import React, { useEffect, useState } from 'react'
import Product from './Product'
import Pagination from './Pagination'
import Dropdown from './Dropdown'
import SearchBar from './SearchBar'

export default function ProductList() {

    const [products, setProducts] = useState ([])

    const ased = async () => {
        try {
            const res = await fetch ('https://api.escuelajs.co/api/v1/products')
            const data = await res.json()
            console.log(data)
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( ()=>{
        ased()
       
    },[])

  return (
   
<div class="flex items-center justify-center min-h-screen">
  <div class="w-full md:w-3/4 lg:w-1/2">
    <div class="relative  shadow-md sm:rounded-lg md:p-20">
      <div class="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <Dropdown />
        <SearchBar />
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-16 py-3">
              <span>Images</span>
            </th>
            <th scope="col" class="px-6 py-3">
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {
            products?.map(product=>{
                return <Product  product = {product}/>
            })
        }
        </tbody>
      </table>
      <Pagination productsLength={115} />
    </div>
  </div>
</div>


  )
}
