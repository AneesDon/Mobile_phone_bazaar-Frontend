import React from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <>
        <div className=' flex h-full'>
        <NavLink to={'personal-information'}>
            Perosnal Details
        </NavLink>

        </div>
    </>
  )
}

export default Sidebar