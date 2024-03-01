import React from 'react'
import Button from '../Button'
import '../../App.css'
    import Flyer_Phone from '../../assets/Flyer_Phone.png'

function Flyer() {
  return (
   <>
       <div className="relative">
    <div className="mx-auto max-w-7xl justify-between px-4 py-2 sm:px-6 lg:px-8 bg-zinc-100 rounded-lg md:flex md:items-center md:h-96">
    <div className="md:w-1/2 pb-16">
      <div>
        <p className="text-xl pt-8 md:pt-28 md:pl-7">Discover the latest</p>
        <h1 className="md:pl-7 font-semibold text-2xl">
          Cutting-Edge Technology and Unbeatable Deals
        </h1>
        <p className="md:pl-7 text-2xl">on a wide range of smartphones</p>
        <div className="md:pl-7">
          <Button class="flyer-btn" btnText="Shop Now &rarr;"  />
        </div>
      </div>
    </div>
    <div className="md:w-1/2 md:text-center">
      <img
        src={Flyer_Phone}
        className="max-h-72 h-auto mx-auto pt-8 md:pt-0 w-40 md:w-auto"
        alt="Smartphone Flyer"
      />
    </div>
  </div>
</div>
   
   </>



  )
}

export default Flyer