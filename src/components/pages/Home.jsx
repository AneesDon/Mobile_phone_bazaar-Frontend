import React from 'react'
import {useSelector} from 'react-redux'
import Flyer from '../flyer/Flyer'
import Container from '../Container';
import ShopByBrand from '../shopbybrand/ShopByBrand';
import Button from '../Button';
import BestSeller from '../bestsellers/BestSeller';



function Home() {


  return (
    <>
      <Flyer />
      <ShopByBrand />
      <BestSeller/>
      
    </>
  );
}

export default Home


