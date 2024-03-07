import React from 'react'
import Button from '../Button'
import {Home , WalletCards, NotepadText} from 'lucide-react'
import Input from '../Input'
import Container from '../Container'
import { Link } from 'react-router-dom'

const products = [
    {
      id: 1,
      name: 'Nike Air Force 1 07 LV8',
      href: '#',
      price: '₹47,199',
      originalPrice: '₹48,900',
      discount: '5% Off',
      color: 'Orange',
      size: '8 UK',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
    },
    {
      id: 2,
      name: 'Nike Blazer Low 77 SE',
      href: '#',
      price: '₹1,549',
      originalPrice: '₹2,499',
      discount: '38% off',
      color: 'White',
      leadTime: '3-4 weeks',
      size: '8 UK',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
    },
    {
      id: 3,
      name: 'Nike Air Max 90',
      href: '#',
      price: '₹2219 ',
      originalPrice: '₹999',
      discount: '78% off',
      color: 'Black',
      imageSrc:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
    },
  ]


function ShippingAddress() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 lg:px-0">
        <Container>
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl ">
            <h1 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl ">
              Shipping Address
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
              <form className=' py-5'>
                <div className="gap-14 flex w-full">
                  <div className=" relative">
                    <h1>Anees Vasa</h1>
                    <input
                      type="checkbox"
                      value={""}
                      className=" absolute top-0 right-0 h-4 w-4 accent-black"
                    />
                    <p>411/10, GSECL Colony, Sikka, Gujrat-361140</p>
                  </div>
                    <div className=" relative pb-5">
                      <h1>Anees Vasa</h1>
                      <input
                        type="checkbox"
                        value={""}
                        className=" absolute top-0 right-0 h-4 w-4 accent-black"
                      />
                      <p>411/10, GSECL Colony, Sikka, Gujrat-361140</p>
                    </div>
                </div>
                <button className=' bg-black rounded-lg text-white px-14 py-3 text-sm hover:bg-slate-700'>
                  Deliver Here
                </button>
                </form>

                <form className=" *:py-2">
                  <Input label="Name" placeholder="Enter Name" />

                  <Input
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    type="number"
                  />

                  <Input label="Flat,House No, Building,Company,Apartment" />
                  <Input label="Area, colony, Street, Village, Sector" />
                  <Input label="City, District" />
                  <Input label="Pincode No." type="number" />
                  <Input label="State" />
                  <Button btnText={"Add Address"} />
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
                <Link to={'/payment-method'}>
                <Button btnText={"Add Payment"} />
                </Link>
              </section>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ShippingAddress