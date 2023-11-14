import React from 'react'

export default function Product(props) {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="p-4">
    <img
  src={props.product.images[0] ? props.product.images[0] : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'}
  onError={(e) => {
    e.target.src = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }}
  class="w-16 md:w-32 max-w-full max-h-full"
  alt="Apple Watch"
/>

    </td>
    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
       {props.product.title }   
    </td>
    <td class="px-6 py-4">
        <div>
            {props.product.description}
        </div>
    </td>
    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
    {props.product.price}
    </td>
    <td class="px-6 py-4">
        <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline p-3">Remove</a>
        <a href="#" class="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</a>
    </td>
</tr>
  )
}
