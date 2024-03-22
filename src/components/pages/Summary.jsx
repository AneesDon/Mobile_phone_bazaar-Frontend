import React,{useState, useEffect} from 'react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Container from '../Container'
import { Trash , ShoppingBag } from 'lucide-react';
import  Button  from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import {Home , WalletCards, NotepadText} from 'lucide-react'
import qr from '../../assets/upi-qr.png'
import '../../App.css'
import { useSelector } from 'react-redux';
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import gold_samsung from '../../assets/Samsung-Galaxy-S24-Ultra-PNG.png'
import inHand from '../../assets/Samsung-Galaxy-S24-Ultra-In-Hand.png'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success_toast_msg from '../toast/success_tost';








function Summary() {


  const location = useLocation();
  const data = location.state;
  const [method, setMethod] = useState(data);
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState(false);
  const navigate = useNavigate();
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const cart = useSelector((state) => state.cart.products);
  const price = useSelector((state) => state.cart.totalPrice);
  const discount = useSelector((state) => state.cart.discount);
  const token = Cookies.get("token");
  const addressId = localStorage.getItem("orderAddress");


useEffect(()=>{
  if(cart.length == 0){
    navigate('/')
  }
},[])


  useEffect(()=>{
      axios.get(`/api/user-management/get-user-address/${addressId}`,{
        headers: {
          'Authorization': 'Bearer ' + token
        } 
      }).then(
        (res)=>{
          setAddress(res.data)
          console.log(res.data);
        }
      ).catch((error)=>{
        console.log(error);
      })
  },[token,addressId])

  const productArr = []

  for(let c in cart){
    console.log(cart[c]);
    productArr.push(cart[c].productId)
  }
  console.log(productArr);
  const handlePlaceOrder = async ()=> {

      await axios.post('/api/order-management/order/',{
        total_amount:price,
        products:productArr,
        payment_method:method,
        order_address:addressId
      },{
        headers: {
          'Authorization': 'Bearer ' + token
        } 
      }).then((res)=>{
          if(res.status == 201){
            onOpenModal()
            success_toast_msg(res.data.msg)
          }
          console.log(res.data);
      }).catch((error)=>{
        console.log(error);
      })

  }


  return (
    <>
    <ToastContainer/>
      <Container>
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
          <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
            <h1 className="text-  xl font-normal tracking-tight text-gray-900 sm:text-4xl">
              Review Your Order
            </h1>

            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
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
                {cart.map((product, productIdx) => (
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
                    </div>
                  </div>
                </div>
              ))}



                </ul>
                <div className=" divide-y divide-solid *:py-7">
                  <div className=" *:py-1">
                    <h1 className=" text-xl font-semibold">Shipping Address</h1>
                    <div>
                      <p className=" text-lg font-medium">{address.user_address}</p>
                      <p>{address?.address_line1}, {address?.address_line2}, {address?.city_district}, {address?.state}-{address?.pincode}</p>
                    </div>
                  </div>

                  <div className=" *:py-1">
                    <h1 className=" text-xl font-semibold">Payment Method</h1>

                    {method === "card" ? (
                      <p className="text-lg font-semibold">
                        Card(.... .... .... .007)
                        
                      </p>
                    ) : null}
                    Please make payment of {price}
                    {method === "upi" ? (
                      <>
                        <p>
                          UPI Payment, Please Scan this QR code to pay your bill
                          of {price}/-
                        </p>
                        <img src={qr} className=" w-[100px] h-[100px]" />
                      </>
                    ) : null}
                    {method === "cash" ? (
                      <>
                        <p>{price}/- will be payble at time of the Delivery</p>
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
                  <dt className="text-sm text-gray-800">Price ({cart.length} item)</dt>
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
          
   
           
          </section>
            </div>
            <Button
              btnText={"Confirm Order"}
              className="px-8 bg-black py-4 text-white rounded-lg hover:bg-gray-800"
              onSubmit={handlePlaceOrder}
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