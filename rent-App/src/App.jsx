import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from './ThemeContext' 
import Layout from './layout'
import Homepage from './Homepage'
import Details_Page from './Details_page'
import ScrollToTop from "./ScrollToTop"
import Dashboard from './Dashboard'
import Login from './Login'
import AuthGuard from './AuthGuard'
import NotFound from './Notfounderrors/NotFound404'

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Layout>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Detailpage/:id' element={<Details_Page />} />

            <Route element={<AuthGuard type="public" />}>
              <Route path='/login' element={<Login />} />
            </Route>
            
            <Route element={<AuthGuard type="private" />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>

            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App