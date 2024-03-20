import React, { useEffect,useState } from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import samsung from '../../assets/Samsung-Galaxy-S24-Ultra-Violet-PNG.png'
import gold_samsung from '../../assets/Samsung-Galaxy-S24-Ultra-PNG.png'
import inHand from '../../assets/Samsung-Galaxy-S24-Ultra-In-Hand.png'
import axios from 'axios'
import Cookies from 'js-cookie'
import { X,ShoppingBag } from 'lucide-react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success_toast_msg from '../toast/success_tost'



function Myorder() {
  

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const token = Cookies.get('token');
  const [orders, setOrders] = useState()

  const fetchOrders = () => {
    axios
      .get("/api/order-management/get-order", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(()=>{
    fetchOrders()
  },[])


const [orderId, setOrderId] = useState()

const handleCancle = (id)=> {
  setOrderId(id)
  onOpenModal()
}


  const cancelOrder = ()=>{
      onCloseModal()
      axios.post('/api/order-management/delete-order/',{
        id:orderId
      }).then((res)=>{
          success_toast_msg(res.data.message)
          console.log(res.data);
          fetchOrders()
      }).catch((error)=>{
          console.log(error);
      })
  }


  return (
    <>
    <ToastContainer/>
    <h1 className=' text-2xl py-3 font-semibold'>My Order</h1>
    <div>

    <ul role="list" className="divide-y divide-gray-200">
                  { orders && orders.map((order, index) => (
                    <>
                    <div key={order.id} className="">
                      <li className="flex py-6 sm:py-6 ">
                        <div className="flex-shrink-0">
                          <img
                            src={"http://127.0.0.1:8000/"+order.product_details[0].image.image}
                            alt={order.name}
                            className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                          />
                        </div>

                        <div className=" flex flex-1 flex-col justify-between sm:ml-6 ">
                          <div className="relative  sm:grid sm:grid-cols-2 sm:gap-x-36 sm:pr-0">
                            <div>
                              <div className="flex justify-between">
                                <h3 className="text-sm">
                                  <Link
                                    to={`/profile/order-details/${order.id}`}
                                    className="font-semibold text-black"
                                  >
                                    {order.product_details[0].product}
                                  </Link>
                                </h3>
                              </div>
                              <div className="mt-1 flex text-sm">
                                <p className="text-sm text-gray-500">
                                  (1/{order.product_details.length}) 
                                </p>
                                {order.product_details[0] ? (
                                  <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                    {order.product_details[0].ram}/{order.product_details[0].rom}GB
                                  </p>
                                  
                                ) : null}
                              </div>
                              <div className="mt-1 flex items-end">
                                <p className="text-sm font-medium text-gray-900 pb-2">
                                  {order.total_amount}₹ 
                                </p>
                                &nbsp;&nbsp;
                              </div>
                              
                                {order.is_delivered ?  <div className=' text-center px-1 w-20 h-6 bg-green-200 rounded-sm'>
                                    <p className=' text-green-500'>Delivered</p>
                                </div>:<div className=' text-center w-20 h-6 bg-orange-100 rounded-sm'>
                                    <p className=' text-orange-500'>In Process</p>
                                </div> }
                             
                            </div>
                            <div className=' text-right'>
                                
                            <button className=' text-white bg-orange-500 h-8 w-28 rounded-md hover:bg-orange-300'
                            onClick={()=>handleCancle(order.id)}
                            >
                                Cancel Order
                            </button>
                            <br/>
                            <Link to={`/profile/order-details/${order.id}`}>
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
                    </>
                  ))}
                </ul>

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
          onClick={cancelOrder}
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

export default Myorder