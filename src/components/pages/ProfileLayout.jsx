import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

function ProfileLayout() {
  return (
    <>    
    <Header/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default ProfileLayout