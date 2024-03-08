import React from 'react'
import Container from '../Container'
import '../../App.css'
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png' 

function BestSeller() {
  return (
    <>
      <Container>
        <div className="pb-10">
          <p className="text-center text-3xl pt-16">Our Best Seller</p>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            <div className="py-16">
              <div className="relative h-[350px] w-[250px] rounded-md group">
                <div className="relative">
                  <img
                    src={samsung}
                    alt="AirMax Pro"
                    className="z-0 rounded-md object-cover"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-12 ">
                    <button className="card-button">Add To Cart</button>
                  </div>
                </div>

                <h1 className=" font-semibold ">Samsung</h1>
                <p>Black</p>
                <div className="flex">
                  <p>1000$</p>
                  <p className="text-gray-500 pl-2 ">10% off</p>
                </div>
              </div>
            </div>
            <div className="py-16">
              <div className="relative h-[350px] w-[250px] rounded-md group">
                <div className="relative">
                  <img
                    src={samsung}
                    alt="AirMax Pro"
                    className="z-0 rounded-md object-cover"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-12 ">
                    <button className="card-button">Add To Cart</button>
                  </div>
                </div>

                <h1 className=" font-semibold ">Samsung</h1>
                <p>Black</p>
                <div className="flex">
                  <p>1000$</p>
                  <p className="text-gray-500 pl-2 ">10% off</p>
                </div>
              </div>
            </div>
            <div className="py-16">
              <div className="relative h-[350px] w-[250px] rounded-md group">
                <div className="relative">
                  <img
                    src={samsung}
                    alt="AirMax Pro"
                    className="z-0 rounded-md object-cover"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-12 ">
                    <button className="card-button">Add To Cart</button>
                  </div>
                </div>

                <h1 className=" font-semibold ">Samsung</h1>
                <p>Black</p>
                <div className="flex">
                  <p>1000$</p>
                  <p className="text-gray-500 pl-2 ">10% off</p>
                </div>
              </div>
            </div>
            <div className="py-16">
              <div className="relative h-[350px] w-[250px] rounded-md group">
                <div className="relative">
                  <img
                    src={samsung}
                    alt="AirMax Pro"
                    className="z-0 rounded-md object-cover"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-12 ">
                    <button className="card-button">Add To Cart</button>
                  </div>
                </div>

                <h1 className=" font-semibold ">Samsung</h1>
                <p>Black</p>
                <div className="flex">
                  <p>1000$</p>
                  <p className="text-gray-500 pl-2 ">10% off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default BestSeller