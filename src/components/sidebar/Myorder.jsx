import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
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
  

function Myorder() {

  return (
    <>
    <h1 className=' text-2xl py-3 font-semibold'>My Order</h1>
    <div>

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

                        <div className=" flex flex-1 flex-col justify-between sm:ml-6 ">
                          <div className="relative  sm:grid sm:grid-cols-2 sm:gap-x-36 sm:pr-0">
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
                                <p className="text-sm font-medium text-gray-900 pb-2">
                                  {product.price}
                                </p>
                                &nbsp;&nbsp;
                              </div>
                                {/* <div className=' text-center px-1 w-20 h-6 bg-green-200 rounded-sm'>
                                    <p className=' text-green-500'>Delivered</p>
                                </div> */}
                                <div className=' text-center w-20 h-6 bg-orange-100 rounded-sm'>
                                    <p className=' text-orange-500'>In Process</p>
                                </div>
                            </div>
                            <div className=' text-right'>
                                <Link to='/profile/cancle-order'>
                            <button className=' text-white bg-orange-500 h-8 w-28 rounded-md hover:bg-orange-300'>
                                Cancel Order
                            </button>
                            </Link><br/>
                            <Link to='/profile/order-details'>
                            <button className=' text-black bg-white h-8 w-28 rounded-md hover:bg-black hover:text-white border border-black'>
                                View Order
                            </button>   
                            </Link>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>

    </div>
    </>
  )
}

export default Myorder