import React from 'react'
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import gold_samsung from '../../assets/Samsung-Galaxy-S24-Ultra-PNG.png'
import inHand from '../../assets/Samsung-Galaxy-S24-Ultra-In-Hand.png'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'


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



function ViewOrder() {

  const id = useParams().id
  const token = Cookies.get('token');
  const [orders, setOrders] = useState()

  useEffect(() => {
    axios
      .get(`/api/order-management/get-order/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
        <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
      <h2 className="text-3xl font-bold">Order Details</h2>

      <div className="mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row">
        <div className="w-full border-r border-gray-300 bg-gray-100 md:max-w-xs">
          <div className="p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
              {[
                ['Order ID','#'+orders?.id],
                ['Date', orders?.expected_delivery.slice(0, 10)],
                ['Total Amount', orders?.total_amount],
                ['Order Status', 'Confirmed'],
              ].map(([key, value]) => (
                <div key={key} className="mb-4">
                  <div className="text-sm font-semibold">{key}</div>
                  <div className="text-sm font-medium text-gray-700">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-8">
            <ul className="-my-7 divide-y divide-gray-200">
              {orders?.product_details.map((product) => (
                <li
                  key={product.id}
                  className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                >
                  <div className="flex flex-1 items-stretch">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                        src={"http://127.0.0.1:8000/"+product.image.image}
                        alt={product.imageSrc}
                      />
                    </div>

                    <div className="ml-5 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">{product.product}</p>
                        <p className="mt-1.5 text-sm font-medium text-gray-500">{product.color}</p>
                      </div>

                      <p className="mt-4 text-sm font-medium text-gray-500">({product.ram}/{product.rom})GB</p>
                    </div>
                  </div>

                  <div className="ml-auto flex flex-col items-end justify-between">
                    <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default ViewOrder