import React, { useState } from 'react'
import Button from '../Button'
import {Home , WalletCards, NotepadText} from 'lucide-react'
import Input from '../Input'
import Container from '../Container'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form' 
import { ToastContainer, toast, Bounce } from "react-toastify";
import success_toast_msg from '../toast/success_tost'
import toast_msg from '../toast/toast'
import "react-toastify/dist/ReactToastify.css";
import { useSelector,useDispatch } from 'react-redux'
import {setAddress} from '../../../store/cartSlice'


function ShippingAddress() {

  const navigate = useNavigate()
  const token = Cookies.get('token')
  const [address, setAddress] = useState()
  const { register,handleSubmit } = useForm()
  const [msg,setMsg] = useState()
  const price = useSelector((state) => state.cart.totalPrice)
  const discount = useSelector((state) => state.cart.discount)

  const cart = useSelector((state) => state.cart.products)
  console.log(cart);
  if(cart.length == 0){
    navigate('/')
  }
  

  useEffect(()=>{

    axios.get('/api/user-management/get-user-address', {
      headers: {
        'Authorization': 'Bearer ' + token
      } 
    })
    .then((res)=>{
      setAddress(res.data)

    }).catch((error)=>{
      console.log('Error: ', error);
    })

  },[token, msg])

  const addAddressHandler = async (data)=>{

    await axios.post('/api/user-management/user-address/',{
      address_line1:data.address_line1,
      address_line2:data.address_line2,
      city_district:data.city,
      pincode:data.pincode,
      state:data.state
    },{
      headers: {
        'Authorization': 'Bearer ' + token
      } 
    }).then((res)=>{
      if(res.status == 201)
      {
        console.log(res.data);
        setMsg(res.data)
        success_toast_msg(res.data.msg)
      }
    }).catch((error)=>{
      console.log(error.response.data);
      if(error.response.status == 400){
          toast_msg(error.response.data.pincode[0])
      }
    })

  }

  const [orderAddress, setOrderAddress] = useState(0)
  const handleChange = (e) => {
    const value = e.target.value;
    setOrderAddress(value);
  }
  console.log(orderAddress);
  const dispatch = useDispatch()
  
  const handleCheckout = () => {
    if(orderAddress){
      localStorage.setItem('orderAddress', orderAddress)
      navigate('/payment-method')
    }
    else{
      toast_msg("Please Select Order Address first..!")
    }
  }



  return (
    <>
    <ToastContainer/>
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <Container>
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl ">
            <h1 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl ">
              Shipping Address
            </h1>

            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              <section
                aria-labelledby="cart-heading"
                className="rounded-lg bg-white lg:col-span-8"
              >
                <nav className="flex py-3" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <Link
                        to=""
                        className="ml-1 inline-flex text-sm font-semibold text-gray-800 hover:underline md:ml-2"
                      >
                        <Home
                          className="mr-4"
                          size={18}
                          fillOpacity={6}
                          fill="gray"
                        />
                        Shipping Address
                      </Link>
                    </li>
                    <li className="inline-flex items-center">
                      <span className="mx-2.5 text-gray-800">/</span>
                      <Link
                        to=""
                        className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                      >
                        <WalletCards className="mr-4 " size={18} />
                        Payment Method
                      </Link>
                    </li>
                    <li className="inline-flex items-center">
                      <span className="mx-2.5 text-gray-800 ">/</span>
                      <Link
                        to=""
                        className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                      >
                        <NotepadText size={18} className="mr-4 " />
                        Summary
                      </Link>
                    </li>
                  </ol>
                </nav>
                <div className=" py-5">
                  <div className="grid grid-cols-2 gap-14">
                    {address && address.map((addr,index)=>
                          <div className="relative pb-5">
                          <h1 className=' font-semibold'>{addr?.user_address}</h1>
                          <label className="absolute top-0 right-0 flex items-center">
                            <input
                              type="checkbox"
                              className="h-4 w-4 mr-1 accent-black"
                              value={addr?.id}
                              onChange={handleChange} 
                              checked={orderAddress == addr?.id}
                              
                            />
                          </label>
                          <p>{addr?.address_line1}, {addr?.address_line2}, {addr?.city_district}, {addr?.state}-{addr?.pincode}</p>
                        </div>
                    )}
                    </div>                  
                </div>

                <form className=" *:py-2" method="POST" onSubmit={handleSubmit(addAddressHandler)}>
                  <Input label="Flat,House No, Building,Company,Apartment" 
                  {...register("address_line1")}
                  />
                  <Input label="Area, colony, Street, Village, Sector"
                  {...register("address_line2")}
                  />
                  <Input label="City, District" 
                  {...register("city")}
                  />
                  <Input label="Pincode No." type="number"
                  {...register("pincode")}
                  />
                  <Input label="State"
                  {...register("state")}
                  />
                  <Button btnText={"Add Address"} 
                  type='submit'
                  />
                </form>
              </section>
              {/* Order summary */}
              <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price ({cart.length} item)</dt>
                  <dd className="text-sm font-medium text-gray-900">₹ {price+discount}</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">- {discount}₹</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">₹ {price}</dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ {discount} on this order
              </div>
            </div>
          
            <Button
            btnText={'Proceed to Checkout '}
            onSubmit={handleCheckout}
            />
           
          </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ShippingAddress