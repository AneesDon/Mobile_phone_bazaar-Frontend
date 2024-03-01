import React from 'react'
import {useSelector} from 'react-redux'
import Flyer from '../flyer/Flyer'
import Container from '../Container';
import ShopByBrand from '../shopbybrand/ShopByBrand';



function Home() {


  return (
    <>
      <Flyer/>
      <ShopByBrand/>
      <Container>
        <div >
        <p className='text-center text-3xl pt-16'>Our Best Seller</p>
        </div>
      </Container>
    </>
  );
}

export default Home