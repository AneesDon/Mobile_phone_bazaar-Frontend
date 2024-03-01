import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <div className='w-full'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </>
    
  )
}

export default Layout