import React,{useEffect} from 'react'
import Image from '../Image'
import Input from '../Input'
import Button from '../Button'
import { ToastContainer } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import toast_msg from '../toast/toast'
import { forgetPassword } from '../../../store/authSlice'
import '../../App.css'

function ChangePassword() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const otp = useSelector(state => state.auth.otp)
    const { register, handleSubmit} = useForm()

      useEffect(()=>{
        if(!otp){
          navigate('/forget-password')
        }
      },[otp])

    const submit = async (data) => {
      if (data.password != data.confirm_password) {
          toast_msg("Password and confirm password are not matching");
        }
        try {
          await axios
            .post("api/user-management/reset-password/", {
              otp: otp,
              new_password: data.password,
              confirm_new_password: data.confirm_password,
            })
            .then((res) => {  
              if(res.status == 201){
                console.log('ok');
                navigate('/login')  
              }
            }).catch((res)=>{
              if(res.response){
                console.log(res);
              }
            })
        } catch (error) {
          throw error;
        }
      }
   

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
        <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Change Password
            </h2>
          <p class="mt-2 text-sm text-gray-600">
        
        
          </p>  
          <form method="POST" onSubmit={handleSubmit(submit)} >
            <div class="space-y-4">
              <div>
                <div class="mt-2">
                 <Input
                  label= "Password"
                  type='password'
                  placeholder='Enter Password'
                  {...register('password')}
                 />
                 <Input
                  label= "Confirm Password"
                  type='password'
                  placeholder='Enter Confirm Password'
                  {...register('confirm_password')}
                 />
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between"></div>
                <div>
                <Button
                btnText='Verify'
                type='Change'
                />
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
};

export default ChangePassword