import React, { useEffect, useState } from 'react'
import Button from '../Button'
import {Home , WalletCards, NotepadText} from 'lucide-react'
import Input from '../Input'
import Container from '../Container'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import Cookies from 'js-cookie'
import success_toast_msg from '../toast/success_tost'
import toast_msg from '../toast/toast'
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from 'react-redux'


function PaymentMethod() {
  const [payMethod, setPaymethod] = useState("");
  const price = useSelector((state) => state.cart.totalPrice)
  const discount = useSelector((state) => state.cart.discount)
  const cart = useSelector((state) => state.cart.products)
  const [card, setCard] = useState("");
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const token = Cookies.get('token')
  console.log(token);

  console.log(cart);

  useEffect(()=>{
    if(cart.length == 0){
      navigate('/')
    }
  },[])




  const addCardHandler = async(data) => {
    await axios.post(('/api/user-management/card-details/'),{
      card_number:data.cardNumber,
      card_name:data.cardName,
      card_expiry:data.cardExpiry,
      cvv:data.cvv
    },{
      headers: {
        'Authorization': 'Bearer ' + token
      } 
    }).then((res)=>{
      if(res.status == 201){
        setCard(res.data)
        success_toast_msg(res.data.msg)
      }
      console.log(res.data);
    }).catch((error) => {
      console.log(error);
  
      if (error.response && error.response.status === 400) {
          if (error.response.data && error.response.data.card_number) {
              toast_msg(error.response.data.card_number.error);
          } else if (error.response.data && error.response.data.cvv) {
              toast_msg(error.response.data.cvv.error);
          } else {
              console.error("Unexpected error response:", error.response.data);          
          }
      } else {
          console.error("Unexpected error status:", error.response.status);
         
      }
  }); 

  }

  const handleCheckout = () => {
      if(payMethod === "card"){
        if(card){
          navigate('/summary',{state:payMethod})
        }
      }else if(payMethod){
        navigate('/summary',{state:payMethod})
      }else{
        toast_msg("Please Select Payment method")
      }
  }

  console.log(payMethod);


  return (
    <>
    <ToastContainer/>
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <Container>
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl ">
            <h1 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl ">
              Payment Method
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
                        to="/shipping-address"
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
                        className="ml-1 inline-flex text-sm font-semibold text-gray-800 hover:underline md:ml-2"
                      >
                        <WalletCards
                          className="mr-4 "
                          size={18}
                          fillOpacity={6}
                          fill="gray"
                        />
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
                <h2 className=" text-xl font-semibold">
                  Select Payment Method
                </h2>

                <div className=" divide-y divide-solid *:py-7">
                  <div className="flex gap-5 py-5 ">
                    <input
                      type="radio"
                      name="payment-method"
                      className=" h-5 w-5 accent-black"
                      onClick={() => setPaymethod("card")}
                    />
                    <label className=" font-semibold">Debit/Credit</label>
                  </div>

                  {payMethod === "card" ? (
                    <>
                      <div>
                        <form className=" *:pb-3" onSubmit={handleSubmit(addCardHandler)}>
                          <Input
                            label="Card Number"
                            placeholder="XXXX XXXX XXXX XXXX"
                            type="number"
                            {...register("cardNumber")}
                          />
                          <Input
                            label="Card Name"
                            placeholder="Enter Card Owner Name"
                            {...register("cardName")}
                          />

                          <div className=" flex gap-3">
                            <Input
                              label="Card Expiry"
                              placeholder="XX/XX"
                              type="month"
                              min="2024-03"
                              {...register("cardExpiry")}
                            />
                            <Input label="CVV" placeholder="XXX" 
                            {...register("cvv")}
                            />
                          </div>

                          <button className=" bg-black text-white px-4 py-3 rounded-lg hover:bg-slate-700"
                          type='submit'
                          >
                            Add Card
                          </button>
                        </form>
                      </div>
                    </>
                  ) : null}

                  <div className="flex gap-5 py-5 ">
                    <input
                      type="radio"
                      name="payment-method"
                      className=" h-5 w-5 accent-black"
                      onClick={() => setPaymethod("upi")}
                    
                    />
                    <label className=" font-semibold">UPI</label>
                  </div>
                  <div className="flex gap-5 py-5 ">
                    <input
                      type="radio"
                      name="payment-method"
                      className=" h-5 w-5 accent-black"
                      onClick={() => setPaymethod("cash")}
                      value={"cash"}
                    />
                    <label className=" font-semibold">Cash on Delivery</label>
                  </div>
                </div>
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

export default PaymentMethod

  // function formatCardNumber(input) {

  //     let cardNumber = input.value.replace(/\s/g, '').replace(/\D/g, '');

  //     let formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ');

  //     return input.value = formattedCardNumber.trim();
  // }