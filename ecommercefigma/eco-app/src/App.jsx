import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './layout'
import HomePage from './pages/home_page'
import ProductDetails from './pages/product_details'
import Signuppage from "./pages/signuppage"


const App = () => {
  return (
     <BrowserRouter>
     <Layout>
     <Routes>
      <Route path='/' exact  element={<HomePage />} />
      <Route path='/product/:id' element={<ProductDetails/>} />
      <Route path='/signup/:id' element={<Signuppage/>} />
    
     </Routes>
     </Layout>
    
     </BrowserRouter>
  )
}

export default App
