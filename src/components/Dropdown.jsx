import React, { useState } from 'react'

export default function Dropdown({ defaultValue, values, onSelectChange, setCurrentPage }) {

  const handleSelectChange = (event) => {

    const value = event.target.value;
    onSelectChange(value)
    setCurrentPage(1)
  };

  return (
    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSelectChange}>
      <option value="0">{defaultValue}</option>
      {values.map((value, index) => {
        return <option key={index} value={value.id}>{value.name}</option>
      })}
    </select>
  )
}
