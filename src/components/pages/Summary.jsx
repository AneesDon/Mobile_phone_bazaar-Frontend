import React,{useState} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Container from '../Container'
import { Trash , ShoppingBag } from 'lucide-react';
import  Button  from '../Button';
import { Link } from 'react-router-dom';
import {Home , WalletCards, NotepadText} from 'lucide-react'
import qr from '../../assets/upi-qr.png'
import '../../App.css'

import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import gold_samsung from '../../assets/Samsung-Galaxy-S24-Ultra-PNG.png'
import inHand from '../../assets/Samsung-Galaxy-S24-Ultra-In-Hand.png'
const products = [
  {
    id: 1,
    name: 'Samsung S24',
    href: '#',
    price: '₹47,199',
    originalPrice: '₹48,900',
    discount: '5% Off',
    color: 'Gray',
    size: '8/128',
    imageSrc:samsung
      
  },
  {
    id: 2,
    name: 'Samsung S23',
    href: '#',
    price: '₹1,549',
    originalPrice: '₹2,499',
    discount: '38% off',
    color: 'White', 
    size: '8/256',
    imageSrc:inHand
      
  },
  {
    id: 3,
    name: 'Samsung S22',
    href: '#',
    price: '₹2219 ',
    originalPrice: '₹999',
    discount: '78% off',
    size: '8/256',
    color: 'gold',
    imageSrc:gold_samsung
  },
]
  




function Summary() {


    const method = 'upi'    
const [open, setOpen] = useState(false);

const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);


  return (
    <>
      <Container>
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
            <h1 className="text-  xl font-normal tracking-tight text-gray-900 sm:text-4xl">
              Review Your Order
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
                        to="/payment-method"
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
                        to="/summary"
                        className="ml-1 inline-flex text-sm font-semibold  text-gray-800 hover:underline md:ml-2"
                      >
                        <NotepadText
                          size={18}
                          className="mr-4 "
                          fillOpacity={6}
                          fill="gray"
                        />
                        Summary
                      </Link>
                    </li>
                  </ol>
                </nav>

                <h2 className=' text-2xl font-semibold py-3'>Estimated Delivery Date:- 15 December 2024</h2>
                <ul role="list" className="divide-y divide-gray-200">
                  {products.map((product, productIdx) => (
                    <div key={product.id} className="">
                      <li className="flex py-6 sm:py-6 ">
                        <div className="flex-shrink-0">
                          <img
                            src={product.imageSrc}
                            alt={product.name}
                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <a
                                    href={product.href}
                                    className="font-semibold text-black"
                                  >
                                    {product.name}
                                  </a>
                                </h3>
                              </div>
                              <div className="mt-1 flex text-sm">
                                <p className="text-sm text-gray-500">
                                  {product.color}
                                </p>
                                {product.size ? (
                                  <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                    {product.size}
                                  </p>
                                ) : null}
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-sm font-medium text-gray-900">
                                  {product.price}
                                </p>
                                &nbsp;&nbsp;
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
                <div className=" divide-y divide-solid *:py-7">
                  <div className=" *:py-1">
                    <h1 className=" text-xl font-semibold">Shipping Address</h1>
                    <div>
                      <p className=" text-lg font-medium">Aness Vasa</p>
                      <p>411/10 gujrat jamnaagar-361140</p>
                    </div>
                  </div>

                  <div className=" *:py-1">
                    <h1 className=" text-xl font-semibold">Payment Method</h1>

                    {method === "card" ? (
                      <p className="text-lg font-semibold">
                        Card(.... .... .... .007)
                      </p>
                    ) : null}
                    {method === "upi" ? (
                      <>
                        <p>
                          UPI Payment, Please Scan this QR code to pay your bill
                          of 1000/-
                        </p>
                        <img src={qr} className=" w-[100px] h-[100px]" />
                      </>
                    ) : null}
                    {method === "cash" ? (
                      <>
                        <p>10000/- will be payble at time of the Delivery</p>
                      </>
                    ) : null}
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
              </section>
            </form>
            <Button
              btnText={"Confirm Order"}
              className="px-8 bg-black py-4 text-white rounded-lg hover:bg-gray-800"
              onClick={onOpenModal}
            />
          </div>
        </div>
      </Container>

      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex justify-center items-center">
          <ShoppingBag size={50} fill="white" />
        </div>
        <h2 className=" px-32 py-5 font-semibold text-xl">
          Your Order Is Confirmed
        </h2>
        <p className=" text-center">
          Thank You For Shopping! Your Order Will Be{" "}
        </p>
        <p className=" text-center">Delivered To Your Doorstep Soon.</p>
        <Link to={"/"}>
          <Button btnText={"Go to Homepage"} />
        </Link>
        <Link to={"/profile/my-orders"}>
          <Button btnText={"View Order"} />
        </Link>
      </Modal>
    </>
  );


//   return (
//     <div>
//       <button onClick={onOpenModal}>Open modal</button>
//       
//     </div>
//   );



}

export default Summary