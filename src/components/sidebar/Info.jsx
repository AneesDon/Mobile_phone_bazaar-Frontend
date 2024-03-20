import React,{useEffect, useState} from 'react'
import Input from '../Input'
import Button from '../Button'
import axios from 'axios'
import Cookies from 'js-cookie'
import success_toast_msg from '../toast/success_tost'
import toast_msg from '../toast/toast'
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Info() {

    const [edit, setEdit] = useState(false)
    const [userData, setUserData] = useState()
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [phoneNumber,setPhoneNumber] = useState()
    const [prevPhone, setPrevPhone] = useState()
    
    const token = Cookies.get('token');

    useEffect(()=>{

      axios.get('api/user-management/get-user',{
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res)=>{
        if(res.status == 200){
          setUserData(res.data)
          setPhoneNumber(res.data.phone_number)
         
        }
      }).catch((error)=>{
          console.log(error);
      })

    },[edit])

    const handleUpdate = (event)=>{


      event.preventDefault();

      if(phoneNumber.length != 10 ){
        toast_msg("Please Check Your Phone Number")
        console.log('nikar nikar');
        return
      }
      axios.patch('api/user-management/update-user/',{
          username:username,
          email:email,
          phone_number:phoneNumber
      },{
        headers: {
          Authorization: "Bearer " + token,
        }
      }).then((res)=>{
        if(res.status == 200){
          success_toast_msg("Profile Updated Successfully")
          console.log(res.data);
        }
      })
      .catch((error)=>{
          if(error.response.status == 400){
            toast_msg(error.response.data.email[0])
          }
      })
      setEdit(!edit)
    }


  return (

          <div className=' *:pb-2  '>
            <ToastContainer/>
        <h1 className=' text-2xl py-3 font-semibold'>Personal Information</h1>
        <Button
        btnText={'Edit Profile'}
        className={' bg-black text-white rounded-lg px-5 py-2  hover:bg-slate-700 duration-200'}
        onClick={() => setEdit(!edit)}

        
        />

        <form className=' *:pb-3'onSubmit={handleUpdate}>
        <Input
        label='Username' 
        defaultValue={userData?.username}
        disabled={!edit}
        onChange={(e) => setUsername(e.target.value)}

        />
        <div className=' flex gap-3'>
            <Input
            label='Email'
            defaultValue={userData?.email}
            disabled={!edit}
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            label='Phone Number'
            type='number'
            defaultValue={userData?.phone_number}
            disabled={!edit}
            onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>


        {edit && <Button
        btnText={'Edit Profile Info'}
        type="submit"
        />}
        </form>
        
        </div>


  )
}

export default Info