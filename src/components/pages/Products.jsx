import Container from '../Container'
import React from 'react'
import { Home } from 'lucide-react'
import Breadcrumbs from '../Breadcrumbs'
import { ArrowUp, ArrowUpRight, ChevronDown } from 'lucide-react'
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import { Link } from 'react-router-dom'



const filters = [
    {
      id: 'brand',
      name: 'Brand',
      options: [
        { value: 'samsung', label: 'Samsung' },
        { value: 'realme', label: 'Realme' },
        { value: 'mi', label: 'MI' },
        { value: 'oneplus', label: 'Oneplus' },
        { value: 'motorola', label: 'Motorola' },
        { value: 'oppo', label: 'Oppo' },
      ],
    },
    {
      id: 'ram',
      name: 'RAM',
      options: [
        { value: '4', label: '4GB' },
        { value: '6', label: '6GB' },
        { value: '8', label: 'Above 6GB' },
      ],
    },
    {
      id: 'rom',
      name: 'ROM',
      options: [
        { value: '64', label: '64GB' },
        { value: '128', label: '128GB' },
        { value: '256', label: 'Above 128GB' },
      ],
    },
  ]



function Products() {
    const bread = [
        {
            name:'Products',
            to:'/products'
        },  
    ]

  return (
    <Container>
      <Breadcrumbs list={bread} />

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
          {/* Top */}
          <div className="md:flex md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-xl font-bold">Products</h1>
            </div>
            <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
              <button
                type="button"
                className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
              >
                Sort <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
              >
                Brand <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
              >
                Ram <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
              >
                Rom <ChevronDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <hr className="my-8" />
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
            <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
              {filters.map((filter) => (
                <div key={filter.id} className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {filter.name}
                  </h3>
                  <ul className="mt-2">
                    {filter.options.map((option) => (
                      <li
                        key={option.value}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="flex items-center">
                          <input
                            id={`${filter.id}-${option.value}`}
                            name={`${filter.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                          />
                          <label
                            htmlFor={`${filter.id}-${option.value}`}
                            className="ml-3 text-sm font-medium text-gray-900"
                          >
                            {option.label}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="h-full w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full  ">
            <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
            <div className='py-16'>
              <div className="relative h-[250px] w-[250px] rounded-md group">
                <Link to={'/product-details'}>
                  <img
                  src={samsung}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                </Link>
                <div className="absolute bottom-4 items-center px-14">
                  
                  <button
                    className="card-button"
                  >
                    Add To Cart &rarr;
                  </button>
                </div>
                <h1 className=" font-semibold ">Samsung s24 (128/8) </h1>
                <p>Black</p>
                <div className="flex">
                  <p>1000$</p>
                  <p className="text-gray-500 pl-2 ">10% off</p>
                </div>
              </div>
            </div>
            <div className='py-16'>
              <div className="relative h-[250px] w-[250px] rounded-md group">
                <Link to={'/product-details'}>
                  <img
                  src={samsung}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                </Link>
                <div className="absolute bottom-4 items-center px-14">
                  
                  <button
                    className="card-button"
                  >
                    Add To Cart &rarr;
                  </button>
                </div>
                <h1 className=" font-semibold ">Samsung s24 (128/8) </h1>
                <p>Black</p>
                <div className="flex">
                  <p>1000$</p>
                  <p className="text-gray-500 pl-2 ">10% off</p>
                </div>
              </div>
            </div>
            
          </div>
            </div>
          </div>
  
      <div className="flex items-center float-right pt-3">
      <Link href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
        &larr; Previous
      </Link>
      <Link
        href="#"
        className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
      >
        1
      </Link>
      <Link
        href="#"
        className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
      >
        2
      </Link>
      <Link
        href="#"
        className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
      >
        3
      </Link>
      <Link
        href="#"
        className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
      >
        4
      </Link>
      <Link href="#" className="mx-2 text-sm font-semibold text-gray-900">
        Next &rarr;
      </Link>
    </div>
        </div>
      </section>

     
    </Container>
  );
}

export default Products