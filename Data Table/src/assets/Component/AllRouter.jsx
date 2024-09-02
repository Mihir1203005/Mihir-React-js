import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './Product'
import AddProduct from './AddProduct'
import Home from './Home'
import Login from './Login'
import PrivatePage from './PrivatePage'
import DescriptionPage from './DescriptionPage'
import EditPage from './EditPage'

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage/:id" element={<DescriptionPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/product" element={
          <PrivatePage>
            <Product />
          </PrivatePage>
          } />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default AllRouter
