import { useState } from 'react'
import ProductList from './components/ProductList'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/users" element={<UserList />}></Route>
    </Routes >
  )
}

export default App
