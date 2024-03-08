import React,{useState} from 'react'
import { X,ShoppingBag } from 'lucide-react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import Button from '../Button';

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






function CancleOrder() {

    const [open, setOpen] = useState(false);

const onOpenModal = () => setOpen(true);
const onCloseModal = () => setOpen(false);


  return (  
    <>
    
    <div className="mx-auto my-4 max-w-4xl md:my-6">
      
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Product List */}
          <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                          src={product.imageSrc}
                          alt={product.imageSrc}
                        />
                      </div>

                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">{product.name}</p>
                          <p className="mt-1.5 text-sm font-medium text-gray-600">
                            {product.color}
                          </p>
                        </div>
                        <p className="mt-4 text-sm font-medium text-gray-500">x 1</p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                      <button
                        type="button"
                        className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                      >
                        <span className="sr-only">Remove</span>
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <hr className="mt-6 border-gray-200" />
              <ul className="mt-6 space-y-3">
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium">Sub total</p>
                  <p className="text-sm font-medium">₹1,14,399</p>
                </li>
                <li className="flex items-center justify-between">
                  <p className="text-sm font-medium ">Total</p>
                  <p className="text-sm font-bold ">₹1,14,399</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="px-5 py-6 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Contact Information</h2>
                  <p className="fontmedium mt-3 text-xs text-gray-700">Order Number: #9876567890</p>
                  <p className="text-xs font-medium text-gray-700">Date: March 03, 2023</p>

                </div>
                <div className="py-6">
                  <h2 className="mb-2 text-base font-bold text-black">Shipping Information</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">Lem Deluce</p>
                  <p className="text-xs font-medium text-gray-700">1 Ronald Regan Court</p>
                  <p className="text-xs font-medium text-gray-700">102-655-3689</p>
                </div>
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Payment Information</h2>
                  <p className="mt-3 text-xs font-medium text-gray-700">**** **** **** 6202</p>
                  <p className="text-xs font-medium text-gray-700">Expires 09/25</p>
                </div>
               
            <p className="text-base font-bold text-black pb-3" >Delivery Expected by 12 Jan 2024</p>
            <button className=' bg-black text-white px-3 py-2 hover:bg-slate-800 hover:text-white rounded-md '
            onClick={onOpenModal}
            >
                Cancle Order
            </button>

     
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Modal open={open} onClose={onCloseModal} center>

        <h2 className=" px-32 py-5 font-semibold text-xl">
          Cancle Order
        </h2>
        <p className=" text-center">
          If you have paid online? {" "}
        </p>
        <p className=" text-center">Than your payment will transfared to our account soon</p>

        <div className=' flex gap-3 object-center justify-center'>
        <Link to={"/profile/my-orders"}>
          <Button btnText={"Yes"} 
          className={' px-12 bg-black rounded-lg text-white py-2 hover:bg-slate-700'}
          />
        </Link>
        <Link to={""}>
          <Button btnText={"No"} 
          className={' px-12 bg-black rounded-lg text-white py-2 hover:bg-slate-700'}
          onClick= {onCloseModal}
          />
        </Link>
        </div>
      </Modal>
    </>


  )
}

export default CancleOrder