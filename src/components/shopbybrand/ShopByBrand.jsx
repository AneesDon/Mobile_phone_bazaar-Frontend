import React from 'react'
import Container from '../Container';
import realme from '../../assets/realme.jpg'
import realme_logo from '../../assets/realme_login.jpg'
import samsung from '../../assets/samsung .png'

const card = [{

    src:realme_logo,
    alt:'Realme'

},{

  src:samsung,
  alt:'samsung'

}]

function ShopByBrand() {
  return (
    <>
    <Container>
  <p className='text-3xl pl-3 pt-16'>Shop by Brand</p>
  <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

    {card ? (
      card.map((item, index) => (
        <div key={index} className="relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[400px] bg-black">
          <img
            src={item.src}
            alt={item.alt}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className='group'>
            <div className="absolute inset-0 rounded-md "></div>
            <div className="absolute bottom-4 items-center flex justify-center w-full pb-4">
              <button className="mt-2 py-2 px-16 cursor-pointer items-center text-sm font-semibold rounded-lg bg-black text-white hover:bg-slate-700 hidden group-hover:block group-hover:duration-500">
                Shop Now &rarr;
              </button>
            </div>
          </div>
        </div>
      ))
    ) : null}
    
  </div>
</Container>
    
    </>
  )
}

export default ShopByBrand