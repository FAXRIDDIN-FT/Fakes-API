import React from 'react'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { Outlet } from 'react-router-dom'

// Outlet != children
const Layout = () => {
  return (
    <>
        <Header/>
        <main className='min-h-[70vh]'>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Layout