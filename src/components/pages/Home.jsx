import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import Flyer from '../flyer/Flyer'
import Container from '../Container';
import ShopByBrand from '../shopbybrand/ShopByBrand';
import Button from '../Button';
import BestSeller from '../bestsellers/BestSeller';
import axios from 'axios';





function Home() {


  const cart = useSelector((state) => state.cart.products)
  console.log(cart);

  const [products, setProducts] = useState()
  useEffect(()=>{
    axios.get('/api/product-management/best-seller')
    .then((res)=>{
      console.log(res.data);
      setProducts(res.data)
    }).catch((error)=>{
        console.log(error);
    })
  },[])

  return (
    <>
      <Flyer />
      <BestSeller product={products}/>
      <ShopByBrand />
      
    </>
  );
}

export default Home


