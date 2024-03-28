import Container from '../Container'
import React, { useEffect, useState } from 'react'
import { Home } from 'lucide-react'
import Breadcrumbs from '../Breadcrumbs'
import { ArrowUp, ArrowUpRight, ChevronDown } from 'lucide-react'
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { set } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../store/cartSlice'
import success_toast_msg from '../toast/success_tost'
import { ToastContainer } from 'react-toastify'


const filters = [
    {
      id: 'brand',
      name: 'Brand',
      options: [
        { value: 'Samsung', label: 'Samsung' },
        { value: 'Realme', label: 'Realme' },
        { value: 'Mi', label: 'Mi' },
        { value: 'Oneplus', label: 'Oneplus' },
        { value: 'Motorola', label: 'Motorola' },
        { value: 'Oppo', label: 'Oppo' },
        { value: 'Apple', label: 'Apple' },
        { value: 'Vivo', label: 'Vivo' },
      ],
    },
  ]


function Products() {

    const [product, setProduct] = useState()

    const bread = [
      {
        name: "Products",
        to: "/products",
      },
    ];

   
    const [brand, setBrand] = useState( useParams().brand ? useParams().brand  : null)
    console.log(brand);

    const handleChange = (e) => {
      const value = e.target.value;
      setBrand(value);
    };

    const handleSortBySelect = (e) => {
      const selectValue = e.target.value;
      axios.get(`/api/product-management/sorted-product?ordering=${selectValue === "highToLow" ? "-price" : "price"}`)
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    useEffect(() => {
      try {
        if (brand) {
          axios.get(`/api/product-management/product/${brand}`)
            .then((res) => {
              setProduct(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          axios.get("/api/product-management/product")
            .then((res) => {
              console.log(res.data[0].image.image);
              setProduct(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    }, [brand]);
    const dispatch = useDispatch();
  
    const handleAddToCart = (id) => {
      success_toast_msg("Added To Cart")
      dispatch(addProduct({
        productId: product[id]?.id,
        name: product[id]?.name,
        brand: product[id]?.brand,
        image: product[id]?.image?.image,
        color: product[id]?.color,
        price: product[id]?.price,
        discount: product[id]?.discount,
        ram:product[id]?.ram,
        rom:product[id]?.rom,
      }));
    };
                                                                                                                                                                                                   


  return (
    <Container>
      <ToastContainer/>
      <Breadcrumbs list={bread} />

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-2 py-10 lg:px-10">
          {/* Top */}
          <div className="md:flex md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-xl font-bold">Products</h1>
            </div>
            <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
              <select
                type="button"
                className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
                onChange={handleSortBySelect}
              >
                <option value={""} className="">
                  Sort By Price
                </option>
                <option value={"highToLow"}>High To Low</option>
                <option value={"lowToHigh"}>Low To High</option>
              </select>
              <select
                type="button"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
              >
                <option value={""} className="">
                  Sort By Price
                </option>
                <option value={"highToLow"}>High To Low</option>
                <option value={"lowToHigh"}>Low To High</option>
              </select>
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
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                            value={option.value}
                            onChange={handleChange}
                            checked={brand === option.value}
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
            <div className="h-full w-full rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full pb-7">
              <div className="mx-auto grid w-full max-w-7xl items-center space-y-2 px-2 py-5 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
                {product &&
                  product.map((item, index) => (
                    <div className="py-16 " key={item.id}>
                      <div className="relative h-[250px] w-[250px] rounded-md group">
                        <Link to={`/product-details/${item.id}`}>
                          <img
                            src={"http://127.0.0.1:8000/" + item.image.image}
                            alt="AirMax Pro"
                            className="z-0 h-full w-full rounded-md object-cover" 
                          />
                        </Link>
                        <div className="absolute bottom-4 items-center px-14">
                          <button
                            className="card-button"
                            onClick={() => handleAddToCart(index)}
                          >
                            Add To Cart &rarr;
                          </button>
                        </div>
                        <p className=" text-gray-500">{item.brand}</p>
                        <h1 className="font-semibold">
                          {item.name} ({item.ram}/{item.rom} GB){" "}
                        </h1>
                        <p>{item.color}</p>
                        <div className="flex">
                          <p>{item.price}₹</p>
                          <p className="text-gray-500 pl-2">
                            {item.discount}% off
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex items-center float-right pt-3">
            <Link
              href="#"
              className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
            >
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


