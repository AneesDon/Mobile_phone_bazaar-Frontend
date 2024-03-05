import React from 'react'
import Container from '../Container'
import '../../App.css'

function BestSeller() {
  return (
    <>
    
    <Container>
        <div className="pb-10">
          <p className="text-center text-3xl pt-16">Our Best Seller</p>
          <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
            <div className='py-16'>
              <div className="relative h-[350px] w-[250px] rounded-md group">
                  <img
                  src="https://www.91-img.com/gallery_images_uploads/b/a/bad6ad3b107cfbb752c4dc1de91c61d6703bb60e.JPG?tr=h-550,w-0,c-at_max"
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute bottom-4 items-center px-14">
                  <button
                    className="card-button"
                  >
                    Add To Cart &rarr;
                  </button>
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
  )
}

export default BestSeller