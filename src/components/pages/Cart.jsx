import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { Trash } from 'lucide-react';
import  Button  from '../Button';
import { Link } from 'react-router-dom';
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import gold_samsung from '../../assets/Samsung-Galaxy-S24-Ultra-PNG.png'
import inHand from '../../assets/Samsung-Galaxy-S24-Ultra-In-Hand.png'


// const people = [
//   {
//     name: 'John Doe',
//     title: 'Front-end Developer',
//     department: 'Engineering',
//     email: 'john@devui.com',
//     role: 'Developer',
//     image:
//       'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
//   },
//   {
//     name: 'Jane Doe',
//     title: 'Back-end Developer',
//     department: 'Engineering',
//     email: 'jane@devui.com',
//     role: 'CTO',
//     image:
//       'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
//   },
// ]
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


function CheckOut() {

  const [quantity, setQuantity] = useState(1)
  const [subTotal, setSubTotal] = useState(1)

  useEffect(()=>{

    setSubTotal(10 * quantity)

  }
  ,[quantity])

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
                              <a href={product.href} className="font-semibold text-black">
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">{product.color}</p>
                            {product.size ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                {product.size}
                              </p>
                            ) : null}
                          </div>
                          <div className="mt-1 flex items-end">
                            <p className="text-xs font-medium text-gray-500 line-through">
                              {product.originalPrice}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              &nbsp;&nbsp;{product.price}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">{product.discount}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex">
                    <div key={productIdx} className="min-w-24 flex">
                      <button type="button" id={productIdx} className="h-7 w-7">
                        -
                      </button>
                      <input
                        type="text"
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        defaultValue={1}
                        
                      />
                      <button type="button" id={productIdx} className="flex h-7 w-7 items-center justify-center"
                      
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500">Remove</span>
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
                  <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">Free</dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                  <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 3,431 on this order
              </div>
            </div>
            <Link to={'/shipping-address'}>
            <Button
            btnText={'Proceed to Checkout '}
            />
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

