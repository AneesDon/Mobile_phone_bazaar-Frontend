import React, { useState } from "react";
import toast_msg from "../toast/toast";
import Input from "../Input";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "../Image";
import Loader from "../loaders/Loader";
import Cookies from 'js-cookie';
// import '../../App.css'



function Login() {


  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const submit = async (data) => {
    if (!isValidEmail(data.email)) {
      toast_msg("Enter valid email format");
    }

    try {
      setLoading(true);
      await axios
        .post("api/user-management/login/", {
          email: data.email,
          password: data.password,
        })
        .then((res) => {
          setLoading(false)
          console.log(res);
          if(res.status == 200){
            setLoading(false)
            localStorage.setItem('user', JSON.stringify({username: res.data.username, active: true}));
            dispatch(login({userData:res.data.username, token:res.data.token}))
            Cookies.set('token',res?.data?.token?.access,{expires: 2, secure:true})
            navigate('/')
          } 
        })
        .catch((res) => {
          setLoading(false)
          toast_msg(res.response.data.msg)
        })
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <section>
        <ToastContainer />
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
                Sign in
              </h2>
              <p class="mt-2 text-sm text-gray-600">
                Don&#x27;t have an account?{" "}
                <Link to="/signup">
                  <a
                    href="#"
                    title=""
                    class="font-semibold text-black transition-all duration-200 hover:underline"
                  >
                    Create a free account
                  </a>
                </Link>
              </p>
              <form method="POST" onSubmit={handleSubmit(submit)}>
                <div class="space-y-5">
                  <div>
                    <div class="mt-2">
                      <Input
                        label="Email"
                        placeholder="Enter Email"
                        type="email"
                        {...register("email")}
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center justify-between"></div>
                    <div class="mt-1">
                      <Input
                        type="password"
                        placeholder="Enter Password"
                        label="Password"
                        {...register("password")}
                      />
                    </div>
                  </div>

                  <div>
                    <Link to={'/forget-password'}>
                    <p className="text-right font-bold hover:underline underline-offset-1 mb-2">
                      Forget Password?
                    </p>
                    </Link>
                    <Button type="submit" btnText="Submit"/>
                  </div>
                </div>
              </form>
            </div>

            )}

           
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
