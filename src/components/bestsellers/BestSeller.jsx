import React, { useEffect, useState } from 'react'
import Container from '../Container'
import '../../App.css'
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png' 
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addProduct } from "../../../store/cartSlice"
import success_toast_msg from '../toast/success_tost'
import { ToastContainer } from 'react-toastify'



function BestSeller({product}) {

  const dispatch = useDispatch();
  
  const handleAddToCart = (id) => {

    success_toast_msg(`${product[id]?.name}  added to your cart. Happy shopping!`)
    dispatch(addProduct({
      productId: product[id]?.id,
      name: product[id]?.name,
      brand: product[id]?.brand,
      image: product[id]?.image?.image,
      color: product[id]?.color,
      price: product[id]?.price,
      discount: product[id]?.discount,
      ram:product[id]?.ram,
      rom:product[id]?.rom,
    }));
  };
  
  
  return (
    <>
    <ToastContainer/>
      <Container>
        <div className="pb-10">
          <p className="text-center text-3xl pt-16">Our Best Seller</p>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            {product && product.map(( product, index)=>   
            <div className="py-16">
              <div className="relative h-[350px] w-[250px] rounded-md group">
                <div className="relative">
                <Link to={`/product-details/${product.id}`}>
                  <img 
                    src={"http://127.0.0.1:8000"+product.image.image} 
                    alt="AirMax Pro"
                    className="z-0 rounded-md object-cover"
                  />
                   </Link>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-12 ">
                    <button className="card-button"
                    onClick={()=>handleAddToCart(index)} 
                    >Add To Cart</button>
                  </div>
                </div>
               
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
        </div>
      </Container>
    </>
  );
}

export default BestSeller