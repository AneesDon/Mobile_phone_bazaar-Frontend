import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import samsung from '../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import axios from 'axios'

function ProductCard({products}) {

 


  return (
        <>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {products && products.map(( product)=>   
            <div className="">
              <div className="relative h-[350px] w-[250px] rounded-md group">
                <Link to={`/product-details/${product.id}`}>
                <div className="relative">
                  <img 
                    src={"http://127.0.0.1:8000"+product.image.image} 
                    alt="AirMax Pro"
                    className="z-0 rounded-md object-cover"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-12 ">
                    <button className="card-button">Add To Cart</button>
                  </div>
                </div>
                </Link>
                <h1 className=" font-semibold ">{product.brand}</h1>
                <p>{product.name}({product.ram}/{product.rom} GB)</p>
                <div className="flex">
                  <p>{product.price}$</p>
                  <p className="text-gray-500 pl-2 ">{product.discount}% off</p>
                </div>
              </div>
            </div>
                 )}
            
          </div>
        
        </>
  )
}

export default ProductCard