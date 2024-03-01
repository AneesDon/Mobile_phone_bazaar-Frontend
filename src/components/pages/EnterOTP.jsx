import React, { useState } from 'react'
import Image from '../Image'
import Input from '../Input'
import '../../App.css'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import axios from 'axios' 
import toast_msg from '../toast/toast'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loader from "../loaders/Loader";
import { forgetPassword } from '../../../store/authSlice'


function EnterOTP() {

    const [loading, setLoading] = useState(false)
    const {register , handleSubmit} = useForm()
    const dispatch  = useDispatch();
    // const userData = useSelector(state => state.auth.userData)
    const navigate = useNavigate()

    const submit = async (data) => {
      if (data) {
        try {
            setLoading(true)
          await axios
            .post("api/user-management/otp-verify/", {
              otp: data.otp,
            })
            .then((res) => {
                setLoading(false)
                if(res.status == 200){
                  dispatch(forgetPassword({otp:data.otp}))
                  navigate('/change-password')
                }
            }).catch((res)=>{
              setLoading(false)
              toast_msg(res.response.data.msg)
            })
        } catch (error) {
          throw error;
        }
      }
    };
   
  return (
    <>
        <ToastContainer/>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 h-screen">
            <div class="absolute inset-0">
                <Image  />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </div>
          <div class="flex items-center justify-center px-4 py-10 mb-15 sm:px-6 sm:py-16 lg:px-8 lg:py-24">

            {loading ? (
                <Loader/>
            ) : (
                <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                  Enter OTP
                  </h2>
                <p class="mt-2 text-sm text-gray-600">
                We have share a code of your registered email address
                {/* {"  "}{userData ? userData.email : ""} */}
                
              
                </p>  
                <form method="POST" onSubmit={handleSubmit(submit)}>
                  <div class="space-y-4">
                    <div>
                      <div class="mt-2">
                       <Input
                        label= "OTP"
                        type='number'
                        placeholder='Enter OTP'
                        {...register('otp')}
                       />
                      </div>
                    </div>
                    <div>
                      <div class="flex items-center justify-between"></div>
                      <div>
                      <Button
                      btnText='Verify'
                      type='submit'
                      class='auth-btn'
                      />
                      </div>
                    </div>
  
                  </div>
                </form>
              </div>
            )}
           
          </div>
        </div>
      
    </>
  )
}

export default EnterOTP