import {Routes, Route} from "react-router-dom"

import { Home } from "../pages/Home"
import { NewProduct } from "../pages/NewProduct"
import { EditProduct } from "../pages/EditProduct"
import { Product } from "../pages/Product"
import { Favorites } from "../pages/Favorites"
import { Orders } from "../pages/Orders"

export function AppRoutes(){
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="new-product" element={<NewProduct />} />
      <Route path="edit-product/:id" element={<EditProduct />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="orders" element={<Orders />} />
    </Routes>
  )
}