import React, { useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import Container from '../Container'
import ProductDetailComponent from '../ProductDetailComponent'
import { NavLink } from 'react-router-dom'
import { Star } from 'lucide-react'
import ProductCard from '../ProductCard'



function ProductDetails() {
  const bread = [
    {
        name:'Products',
        to:'/products'
    },
    {
      name:'Smart-phone',
      to:'#'
    } 
]

const [selectedButton, setSelectedButton] = useState('button1');
const [rating, setRating] = useState(0);
const [hover, setHover] = useState(0);
console.log(rating);

const handleClick = (button) => {
  setSelectedButton(button);
};


  return (
    <>
      <Container>
        <Breadcrumbs list={bread} />
        <ProductDetailComponent />

        <div className="flex gap-6 pb-2 pt-8">
          <button
            className={`bg-white duration-100 ${
              selectedButton === "button1" ? "font-semibold " : ""
            }`}
            onClick={() => handleClick("button1")}
          >
            Description
          </button>
          <button
            className={`bg-white duration-100 ${
              selectedButton === "button2" ? "font-semibold " : ""
            }`}
            onClick={() => handleClick("button2")}
          >
            Review
          </button>
        </div>
        <div className="flex-grow border-t border-gray-200"></div>

        <div
          className={`${selectedButton === "button1" ? "block" : "hidden"}  `}
        >
          this is Description
        </div>
        <div
          className={` ${selectedButton === "button2" ? "block" : "hidden"}  `}
        >
          <div className="py-5">
            <p className=" font-semibold">Customer Reviews</p>

            <div className="pt-4 flex">
              <img
                className="inline-block h-[50px] w-[50px] rounded-full"
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                alt="Dan_Abromov"
              />
              <div className="flex flex-col pl-2">
                <div className="flex items-center">
                  <div>
                    <p className="pl-1 pt-1">Anees Vasa</p>
                    <span className="flex items-center pl-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-500"
                          fillRule={"inherit"}
                          fill="#FFFF00"
                        />
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="pt-2">Good Phone nice phone </h1>
            <p className=" text-gray-500">
              review by Anees Vasa at 12:00:12/10/20213
            </p>
          </div>
          <div className="flex-grow border-t border-gray-200"></div>

          <div class="add-review" className=" py-5">
            <p className="font-semibold">Add Your Review</p>

            <div className="star-rating">
              <p className="text-gray-500 pt-4 pb-2">Your Rating</p>
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={""}
                    onClick={() => setRating(index)}
                  >
                    <Star
                      fill={index <= (hover || rating) ? "yellow" : "white"}
                    />
                  </button>
                );
              })}
            </div>
            <p className="text-gray-900 pt-4 pb-1">Your Review</p>
            <textarea
              placeholder="Enter Review"
              className="w-full border border-black rounded-lg py-2 px-2"
            ></textarea>
            <button className="text-center py-3 px-7 bg-black text-white rounded-lg hover:bg-gray-700">
              submit
            </button>
          </div>

             
          </div>

          <div class="related-product" className="py-8">
              
          <p className=" font-semibold">Related Products</p>
              <ProductCard/>
        </div>
      </Container>
    </>
  );
}

export default ProductDetails


