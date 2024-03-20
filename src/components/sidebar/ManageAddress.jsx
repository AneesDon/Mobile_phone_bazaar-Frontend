import React,{useEffect, useState} from 'react'
import Button from '../Button'
import { DeleteIcon, Edit, PhoneCallIcon, Trash2Icon } from 'lucide-react'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast, Bounce } from "react-toastify";
import success_toast_msg from '../toast/success_tost'
import toast_msg from '../toast/toast'
import "react-toastify/dist/ReactToastify.css";


function ManageAddress() {


    const [open, setOpen] = useState(false);
    const {setValue, register, handleSubmit, reset} = useForm()
    const [userAddress, setUserAddress] = useState([])
    const [addressId, setAddressId] = useState()
    const [editAddressId, setEditAddressId] = useState()
    const navigate = useNavigate()

const onOpenModal = () => setOpen(true);
const onCloseModal = () => {

    setOpen(false)
    setShowForm(false)
}
const [showForm, setShowForm] = useState(false)
const handleEdit = ({address}) => {
    setShowForm(true)
    onOpenModal();
    setEditAddressId(address.id)
    setValue('address_line1', address.address_line1)
    setValue('address_line2', address.address_line2)
    setValue('city', address.city_district)
    setValue('pincode', address.pincode)
    setValue('state', address.state)
}
const handleAddClick = () => {

    reset()
    setShowForm(true)
    onOpenModal();

}
const handleDelete= (id) => {
    setShowForm(false)
    onOpenModal();
    setAddressId(id)
}



const token = Cookies.get('token');
console.log(token);
const fetchUserAddress = async () => {
  try {
    const response = await axios.get('/api/user-management/get-user-address/', {
      headers: {
        Authorization: "Bearer " + token,
      }
    }).then((res)=>{
      console.log(res.data);
      setUserAddress(res.data)
    })

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchUserAddress();
}, []);



  const addAddressHandler = async (data,event)=>{
    event.preventDefault()
    await axios.post('/api/user-management/user-address/',{
      address_line1:data.address_line1,
      address_line2:data.address_line2,
      city_district:data.city,
      pincode:data.pincode,
      state:data.state
    },{
      headers: {
        'Authorization': 'Bearer ' + token
      } 
    }).then((res)=>{
      if(res.status == 201)
      {
        console.log(res.data);  
        success_toast_msg(res.data.msg)
        navigate('/profile/manage-address')
        onCloseModal()
        reset()
        fetchUserAddress()
      }
    }).catch((error)=>{
      console.log(error.response.data);
      if(error.response.status == 400){
          toast_msg(error.response.data.pincode[0])
      }
    })
  }

  const handleDeleteAddress = () => {

    axios.post('/api/user-management/delete-address/',{
      id:addressId
    },{
      headers: {
        'Authorization': 'Bearer ' + token
      } 
    }).then((res)=>{
       success_toast_msg(res.data.message)
        onCloseModal()
        fetchUserAddress()
    }).catch((error)=>{
      console.log(error)
    })

  }


  const handleEditAddress = (data) => {

    axios.patch(`/api/user-management/update-address/${editAddressId}`,{
      address_line1:data.address_line1,
      address_line2:data.address_line2,
      city_district:data.city,
      pincode:data.pincode,
      state:data.state
    }).then((res)=>{
      success_toast_msg(res.data.msg)
      console.log(res.data);
      onCloseModal()
    }).catch((error)=>{
      console.log(error);
    })
    
  }


  return (
    <>
    <ToastContainer/>
      <Button
        btnText={"+ Add Address"}
        className="bg-black px-8 text-white rounded-md
    py-2 hover:bg-gray-500 transition-colors duration-300"
    onClick={handleAddClick}
      />
      <ul className=" border-t border-t-gray-200 *:border-t *:py-2">
        {userAddress &&  userAddress.map((address)=>
              <li className="flex justify-between" key={address?.id}>
                 <div className="*:py-1">
                   <p className="text-xl font-medium">{address.user_address}</p>
                   <p className="text-md text-gray-600">
                     {address?.address_line1},{address?.address_line2},{address?.city_district},{address?.pincode},{address?.state}
                   </p>
                   <div className="text-md text-gray-600 flex gap-2">
                     <PhoneCallIcon />
                     <p>{address.user_phone_number}</p>
                   </div>
                 </div>
                 <div className=" *:mt-1">
                   <button
                     className=" bg-white text-red-500 border border-red-500 rounded-lg px-1 py-1 flex gap-1"
                     onClick={()=> handleDelete(address.id)}
                   >
                     <Trash2Icon />
                     Delete
                   </button>
                   <button
                     className=" bg-white text-black-500 border border-black rounded-lg px-3 py-1 flex gap-2"
                     onClick={ () => handleEdit({address})}
                   >
                     <Edit />
                     Edit
                   </button>
                 </div>
               </li>
        )}
 
      </ul>
      <Modal open={open} onClose={onCloseModal} center>

        { !showForm ?                

                <>
                <h2 className=" px-32 py-5 font-semibold text-xl">Delete Address</h2>
                <div className=" flex gap-3 object-center justify-center">
                  <Link to={""}>
                    <Button
                      btnText={"Yes"}
                      className={
                        " px-12 bg-black rounded-lg text-white py-2 hover:bg-slate-700"
                      }
                      onClick={handleDeleteAddress}
                    />
                  </Link>
                  <Link to={""}>
                    <Button
                      btnText={"No"}
                      className={
                        " px-12 bg-black rounded-lg text-white py-2 hover:bg-slate-700"
                      }
                      onClick={onCloseModal}
                    />
                  </Link>
                </div>
                </>
                :
                <>
               <form className=" *:py-2" method="POST" onSubmit={handleSubmit(editAddressId ? handleEditAddress : addAddressHandler)}>
                  <Input label="Flat,House No, Building,Company,Apartment" 
                  {...register("address_line1")}
                  />
                  <Input label="Area, colony, Street, Village, Sector"
                  {...register("address_line2")}
                  />
                  <Input label="City, District" 
                  {...register("city")}
                  />
                  <Input label="Pincode No." type="number"
                  {...register("pincode")}
                  />
                  <Input label="State"
                  {...register("state")}  
                  />
                  <Button btnText={"Add Address"} 
                  type='submit'
                  />
                </form>
                </>
                
                }




      </Modal>
    </>
  );
}

export default ManageAddress