import React, { useEffect } from 'react'
import Input from '../Input'
import Button from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast_msg from '../toast/toast'
import Image from '../Image'
import '../../App.css'



function Signup() {


    const navigate = useNavigate();
    const { register, handleSubmit, watch } = useForm();
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    const submit = async (data) => {
      if (!isValidEmail(data.email)) {
        toast_msg("Enter valid email format");
      }
      if (data.phonenumber.length < 10) {
        toast_msg("enter valid number");
        return;
      }
      if (data.password != data.confirm_password) {
        toast_msg("Password and confirm password does not match!");
        return;
      }

      try {
        await axios
          .post("api/user-management/user/", {
            email: data.email,
            username: data.username,
            password: data.password,
            confirm_password: data.confirm_password,
            phone_number: data.phonenumber,
          })
          .then((res) => {
           if(res.status == 201){
            navigate('/login')
           }  
          })
          .catch((res) => {
            toast_msg(res.response
.              data.error.email[0])
          });
      } catch (error) {
        throw error;
      }
    };   

  return (
    <>
      <ToastContainer/>
    <div class="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
    
    <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 h-screen">
      <div class="absolute inset-0">
      <Image  />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
    <div class="flex items-center justify-center px-4 py-8 mb-15 sm:px-6 sm:py-12 lg:px-8 lg:py-10 ">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
         Sign Up
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          Already have an account {" "}
          <Link to='/login'>
          <a
            class="font-semibold text-black transition-all duration-200 hover:underline"
          >
          Login
          </a>
          </Link>
        </p>
        <form onSubmit={handleSubmit(submit)} method='post'>
          <div class="space-y-5">
  
                <Input
                  label="Username"
                  placeholder="Enter Username"
                  type="text"
                  {...register('username')}
                />
                <Input
                  label="Email"
                  placeholder="Enter Email"
                  type="email"
                  {...register('email')}
                />
                <Input
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  type="number"
                  {...register('phonenumber')}
                />

                <Input
                  type="password"
                  placeholder="Enter Password"
                  label="Password"
                  {...register('password')}
                />      
                <Input
                  type="password"
                  placeholder="Enter Password"
                  label="Confirm Password"
                  {...register('confirm_password')}
                />      

            <div>
              <Button
              type='submit'
              btnText='Submit'
              class='auth-btn'
              />
            
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default Signup