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

      

    </>
  );
}

export default Home