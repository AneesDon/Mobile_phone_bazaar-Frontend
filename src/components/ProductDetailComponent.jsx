import React,{useEffect, useState} from 'react'
import {ChevronDown, Star} from 'lucide-react'
import samsung from '../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import gold_samsung from '../assets/Samsung-Galaxy-S24-Ultra-PNG.png'
import inHand from '../assets/Samsung-Galaxy-S24-Ultra-In-Hand.png'
import addToCart from '../services/CartServices'
import { useDispatch } from "react-redux"
import { addProduct } from "../../store/cartSlice"
import success_toast_msg from './toast/success_tost'
import { ToastContainer } from 'react-toastify'

function ProductDetailComponent({product}) {
    
    const imagePath = "http://127.0.0.1:8000"
   
    const [displayImage, setdisplayImage] = useState()
    const dispatch = useDispatch();

    const addToCartHandler = ()=> {
      success_toast_msg("Added To Cart")
      dispatch(addProduct({
        productId: product?.id,
        name: product?.name,
        brand: product?.brand,
        image: product?.product_images[0]?.image,
        color: product?.product_features?.color,
        price: product?.price,
        discount: product?.discount,
        ram: product?.product_features?.ram,
        rom: product?.product_features?.rom,
      }))
    }


  return (
    <>
      <ToastContainer/>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-8">
          <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
            <img
              alt="Nike Air Max 21A"
              className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2 "
              
              src={displayImage ? displayImage : imagePath + product?.product_images[0]?.image}
            />

            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
              <h2 className="text-sm font-semibold tracking-widest text-gray-500">
                {product?.brand}
              </h2>
              <h1 className="my-4 text-3xl text-black">
                {product?.name} ({product?.product_features?.ram}/
                {product?.product_features?.rom} GB)5G
              </h1>
              <div className="my-4 flex items-center">
                <span className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-500"
                      fillRule={"inherit"}
                      fill="#FFFF00"
                    />
                  ))}
                  <span className="ml-3 inline-block text-xs font-semibold">
                    4 Reviews
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">
                <ul>
                  <li>Colour :- {product?.product_features?.color}</li>
                  <li>
                    Screen Size:- {product?.product_features?.screen_size}Inchs
                  </li>
                  <li>
                    Camera:- {product?.product_features?.rear_camera}MP +{" "}
                    {product?.product_features?.front_camera}MP
                  </li>
                  <li>Battery:- {product?.product_features?.battery} mAh</li>
                </ul>
              </p>
              <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                <div className="flex items-center">
                  <span className="title-font text-xl font-bold text-gray-900">
                    {product?.price}₹
                  </span>
                  <span className="title-font text-xl pl-3 font-bold text-gray-400">
                    {product?.discount}%Off
                  </span>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="relative"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 w-full text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-244">
        {product && product?.product_images.map((img) => 
          
          <img
            alt="Nike Air Max 21A"
            className="h-[120px] w-[120px] rounded object-cover hover:border border-black"
            src={imagePath + img.image}
            onClick={() => setdisplayImage(imagePath + img.image)}
            key={img.id}
          />
        )}
      </div>
    </>
  );
}

export default ProductDetailComponent