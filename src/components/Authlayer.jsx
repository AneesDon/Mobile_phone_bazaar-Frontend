import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Authlayer({ children, authentication = true }) {
    const [loader, setLoader] = useState(true);
    const [authStatus, setAuthStatus] = useState(false);
    const navigate = useNavigate();
    const userActive = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (userActive) {
            setAuthStatus(true);
        }
        setLoader(false);
    }, [userActive]);

    const user = useSelector(state => state.auth.userData);

    useEffect(() => {
        if (!loader) {
            if (authentication && !authStatus) {
                navigate('/login');
            } else if (!authentication && authStatus) {
                navigate('/');
            }
        }
    }, [loader, authStatus, navigate, authentication]);

    return (
        loader ? <h1>Loading...</h1> : <>{children}</>
    );
}

export default Authlayer;




// render(<ColorRing
//   visible={true}
//   height="80"
//   width="80"
//   ariaLabel="color-ring-loading"
//   wrapperStyle={{}}
//   wrapperClass="color-ring-wrapper"
//   colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//   />)