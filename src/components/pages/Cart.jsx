import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { Trash } from 'lucide-react';
import  Button  from '../Button';
import { Link } from 'react-router-dom';
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import gold_samsung from '../../assets/Samsung-Galaxy-S24-Ultra-PNG.png'
import inHand from '../../assets/Samsung-Galaxy-S24-Ultra-In-Hand.png'
import { useSelector, useDispatch } from 'react-redux';
import {removeProduct} from '../../../store/cartSlice'




function CheckOut() {

  const [quantity, setQuantity] = useState(1)
  const [subTotal, setSubTotal] = useState(1)

  useEffect(()=>{

    setSubTotal(10 * quantity)

  }
  ,[quantity])

  const cart = useSelector((state) => state.cart.products)
  const price = useSelector((state) => state.cart.totalPrice)
  const discount = useSelector((state) => state.cart.discount)
  console.log(price);
  console.log(discount);

  const dispatch = useDispatch()
  const handleRemoveProduct = (id) => {
        
        dispatch(removeProduct(id))
  }
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    let totalPrice = 0;
    for (let i in cart) {
      totalPrice += cart[i].price;
    }
    setTotal(totalPrice);
  }, [cart]);




  return (
    <>
      <Container>
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {cart &&  cart.map((product, productIdx) => (
                <div key={product.productId} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={"http://127.0.0.1:8000/"+product.image}
                        alt={product.name}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <Link to={`/product-details/${product.productId}`} className="font-semibold text-black">
                               {product.brand} {product.name}
                              </Link>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">{product.color}</p>
                            {product.ram ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                {product.ram}/{product.rom} GB
                              </p>
                            ) : null}
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              {Math.round(product.price / product.discount + product.price)}₹
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                              &nbsp;&nbsp;{product.price}₹/-
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-xs font-medium text-green-500">{product.discount}% Off</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex">
              
                    <div className="ml-6 flex text-sm">
                      <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0"
                       onClick={()=>{
                        handleRemoveProduct(product.productId)
                      }}
                      >
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500"
                       
                        >Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
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
            <Link to={'/shipping-address'}>
              {cart.length != 0 ?      
            <Button
            btnText={'Proceed to Checkout '}
            />
             : null }
            </Link>
          </section>
        </form>
      </div>
    </div>


      </Container>
    </>
  );
}

export default CheckOut

{/* <div class="py-5">
<p class="text-2xl font-medium">Your Cart</p>
  <div className='flex'>
<div class="flex flex-col md:flex-row ">
    <section class="mx-auto w-full max-w-7xl px-4 py-4">
      <div class="mt-6 flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden border border-gray-200 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                      <span>Product</span>
                    </th>
                    <th scope="col"
                        class="px-12 py-3.5 text-left text-sm font-normal text-gray-700">
                      Price
                    </th>

                    <th scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                      Quantity
                    </th>

                    <th scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                      Subtotal
                    </th>
                    <th scope="col" class="relative px-4 py-3.5">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.name}>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full object-cover"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div class="text-sm text-gray-700">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900 ">
                          {person.title}
                        </div>
                        <div class="text-sm text-gray-700">
                          {person.department}
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div className='h-8 w-16 border border-gray-700 rounded-lg object-center flex'>
                          <button className='w-1/3 text-2xl text-gray-700 font-normal  rounded-lg'
                            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                          >
                            -
                          </button>
                          <p className='w-1/3 text-pretty text-lg font-normal pl-1 text-gray-700'>{quantity}</p>
                          <button className='w-1/3  text-xl font-normal text-gray-700  rounded-lg'
                            onClick={() => setQuantity(quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        {subTotal}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <button href="#" class="text-gray-700">
                          <Trash color='red' />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div>

  </div>
  </div>
</div> */}

