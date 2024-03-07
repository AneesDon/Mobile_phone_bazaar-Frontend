import React, { useState } from 'react'
import Button from '../Button'
import {Home , WalletCards, NotepadText} from 'lucide-react'
import Input from '../Input'
import Container from '../Container'
import { Link } from 'react-router-dom'

function PaymentMethod() {

    const [payMethod, setPaymethod] = useState('')
    const [card, setCard] = useState('')

    console.log(payMethod);
    function formatCardNumber(input) {
        // Remove any existing spaces and non-digit characters
        let cardNumber = input.value.replace(/\s/g, '').replace(/\D/g, '');
    
        // Add a space after every 4 digits
        let formattedCardNumber = cardNumber.replace(/(.{4})/g, '$1 ');
    
        // Update the input value
        input.value = formattedCardNumber.trim();
    }
    

  return (

<>
<div className="mx-auto max-w-7xl px-5 lg:px-0">
        <Container>
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl ">
            <h1 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl ">
                Payment Method
            </h1>

            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
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
                        <WalletCards className="mr-4 " size={18} 
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
                <h2 className=' text-xl font-semibold'>Select Payment Method</h2>

                <div className=' divide-y divide-solid *:py-7'>
                <div className='flex gap-5 py-5 '>
                <input
                type='radio'
                name='payment-method'
                className=' h-5 w-5 accent-black'
                onClick={()=> setPaymethod('card')}
                />
                <label className=' font-semibold'>Debit/Credit</label>
                </div>
                
                { payMethod === 'card' ? <>
                
                <div>
                        <form className=' *:pb-3'>
                            <Input
                            label='Card Number'
                            placeholder='XXXX XXXX XXXX XXXX'
                            type='number'
                            />
                            <Input
                            label='Card Name'
                            placeholder='Enter Card Owner Name'
                            />

                            <div className=' flex gap-3'>
                                <Input
                                label='Card Expiry'
                                placeholder='XX/XX'
                                />
                                <Input
                                label='CVV'
                                placeholder='XXX'
                                />

                            </div>

                            <button className=' bg-black text-white px-4 py-3 rounded-lg hover:bg-slate-700'>
                                Add Card
                            </button>
                        </form>
                </div>
                 </> : null }


                <div className='flex gap-5 py-5 '>
                <input
                type='radio'
                name='payment-method'
                className=' h-5 w-5 accent-black'
                onClick={()=> setPaymethod('upi')}
                />
                <label className=' font-semibold'>UPI</label>
                </div>
                <div className='flex gap-5 py-5 '>
                <input
                type='radio'
                name='payment-method'
                className=' h-5 w-5 accent-black'
                onClick={()=> setPaymethod('cash')}
                />
                <label className=' font-semibold'>Cash on Delivery</label>
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
                      <dt className="text-sm text-gray-800">Price (3 item)</dt>
                      <dd className="text-sm font-medium text-gray-900">
                        ₹ 52,398
                      </dd>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <dt className="flex items-center text-sm text-gray-800">
                        <span>Discount</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        - ₹ 3,431
                      </dd>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <dt className="flex text-sm text-gray-800">
                        <span>Delivery Charges</span>
                      </dt>
                      <dd className="text-sm font-medium text-green-700">
                        Free
                      </dd>
                    </div>
                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                      <dt className="text-base font-medium text-gray-900">
                        Total Amount
                      </dt>
                      <dd className="text-base font-medium text-gray-900">
                        ₹ 48,967
                      </dd>
                    </div>
                  </dl>
                  <div className="px-2 pb-4 font-medium text-green-700">
                    You will save ₹ 3,431 on this order
                  </div>
                </div>
                <Link to={'/summary'}>
                <Button btnText={"Place Order"} />
                </Link>
              </section>
            </form>
          </div>
        </Container>
      </div>
</>

  )
}

export default PaymentMethod