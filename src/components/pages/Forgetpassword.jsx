import React, { useState } from "react";
import Image from "../Image";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast_msg from "../toast/toast";
import { ToastContainer } from "react-toastify";
import { forgetPassword } from "../../../store/authSlice";
import Loader from "../loaders/Loader";
import '../../App.css'

function Forgetpassword() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    if (data) {
      try {
        setLoading(true);
        await axios
          .post("api/user-management/find-account/", { email: data.email })
          .then((res) => {
            setLoading(false);
            if(res.status == 200){
              navigate('/verify-otp')
            }
            
          }).catch((res)=>{
            console.log(res);
            setLoading(false)
            if(res.response){

              if(res.response.status == 400){
                toast_msg(res.response.data.msg)
                setSent(true)
              }else{
                toast_msg('No User Found')
              }
            }

          })
      } catch (error) {
        
        throw error;
      }
    }
  };

  return (
    <section>
      <ToastContainer />
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 h-screen">
          <div class="absolute inset-0">
            <Image />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div class="flex items-center justify-center px-4 py-10 mb-15 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          {loading ? (
            <Loader />
          ) : (
            <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Forgot Password
              </h2>
              <p class="mt-2 text-sm text-gray-600">
                Enter your registered email address. we’ll send you a code to
                reset your password
              </p>
              <form method="POST" onSubmit={handleSubmit(submit)}>
                <div class="space-y-4">
                  <div>
                    <div class="mt-2">
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter Email Address"
                        {...register("email")}
                      />
                    </div>
                  </div>
                  <div>


              {sent ? (<>
              
                <p class="mt-2 text-sm text-gray-600">
                Move to{" "}
                <Link to="/verify-otp">
                  <a
                    title=""
                    class="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                   Enter OTP
                  </a>
                </Link>
              </p>
              </>) : (<>
                {'  '}
              
              </>)}

                    <div class="flex items-center justify-between"></div>
                    <div>
                      <Button btnText="Send OTP" type="submit" />
                    </div>
                  </div>
                </div>
              </form>
              
            </div>
          )}

          
        </div>
      </div>
    </section>
  );
}

export default Forgetpassword;
