import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import Login from './pages/Login'

function Authlayer({
  children, authentication = true
}) {
    const [loader,setLoader] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    
    const user = useSelector(state => state.auth.userData)  
    useEffect(()=>{

      if(authentication && authentication !== authStatus){
        
        navigate('/login')
      }else if(!authentication && authStatus != authentication){
          navigate('/')
      }
      setLoader(false)

    },[authStatus, navigate, authentication])

  return (
    loader ? <h1>loading....</h1> : <>{children}</> 
  )
}

export default Authlayer



// render(<ColorRing
//   visible={true}
//   height="80"
//   width="80"
//   ariaLabel="color-ring-loading"
//   wrapperStyle={{}}
//   wrapperClass="color-ring-wrapper"
//   colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//   />)