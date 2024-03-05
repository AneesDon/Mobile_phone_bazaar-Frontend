import React from 'react'
import Container from '../Container';
import realme from '../../assets/realme.jpg'
import realme_logo from '../../assets/realme_login.jpg'
import samsung_logo from '../../assets/samsung_logo.png'
import redmi from '../../assets/Xiaomi_logo.png'
import oneplus from '../../assets/OnePlus-Logo.png'
import { Link } from 'react-router-dom';

const card = [{

    src:realme_logo,
    alt:'Realme'

},{

  src:redmi,
  alt:'redmi'

}
,{

  src:oneplus,
  alt:'oneplus'

},{

  src:samsung_logo,
  alt:'samsung'

}
,]

function ShopByBrand() {
  return (
    <>
    <Container>
  <p className='text-3xl pl-3 pt-16'>Shop by Brand</p>
  <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

    {card ? (
      card.map((item, index) => (
       <>

       <div className=' bg-white rounded-full'>
        <Link to={'/'}>
       <img
       src={item.src}
       className='hover:grayscale  rounded-lg  md:h-[300px] lg:h-[200px]'
       />
       </Link>
       </div>
       </>
      ))
    ) : null}
    
  </div>
</Container>
    
    </>
  )
}

export default ShopByBrand