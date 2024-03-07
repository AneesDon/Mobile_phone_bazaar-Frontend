import React from 'react'
import { Link } from 'react-router-dom'
import samsung from '../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'

function ProductCard({detail}) {
  return (
        <>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            <div className=''>
              <div className="relative h-[250px] w-[250px] rounded-md group">
                <Link to={'/product-details'}>
                  <img
                  src={samsung}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                </Link>
                <div className="absolute bottom-4 items-center px-14">
                  
                  <button
                    className="card-button"
                  >
                    Add To Cart &rarr;
                  </button>
                </div>
                <h1 className=" font-semibold ">Samsung s24 (128/8) </h1>
                <p>Black</p>
                <div className="flex">
                  <p>1000$</p>
                  <p className="text-gray-500 pl-2 ">10% off</p>
                </div>
              </div>
            </div>
            
          </div>
        
        </>
  )
}

export default ProductCard