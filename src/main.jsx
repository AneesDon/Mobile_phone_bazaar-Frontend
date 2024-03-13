import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup.jsx";
import Home from "./components/pages/Home.jsx";
import store from "../store/store";
import { Provider } from "react-redux";
import Authlayer from "./components/Authlayer.jsx";
import Forgetpassword from "./components/pages/Forgetpassword.jsx";
import EnterOTP from "./components/pages/EnterOTP.jsx";
import ChangePassword from "./components/pages/ChangePassword.jsx";
import Layout from "./components/pages/Layout.jsx";
import About from "./components/pages/About.jsx";
import Products from "./components/pages/Products.jsx";
import ProductDetails from "./components/pages/ProductDetails.jsx";
import Cart from "./components/pages/Cart.jsx";
import ShippingAddress from "./components/pages/ShippingAddress.jsx";
import PaymentMethod from "./components/pages/PaymentMethod.jsx";
import Summary from "./components/pages/Summary.jsx";
import ProfileLayout from "./components/pages/ProfileLayout.jsx";
import PersonalDetails from "./components/sidebar/Profile.jsx";
import Info from "./components/sidebar/Info.jsx";
import ManageAddress from "./components/sidebar/ManageAddress.jsx";
import Myorder from "./components/sidebar/Myorder.jsx";
import CancleOrder from "./components/sidebar/CancleOrder.jsx";
import ViewOrder from "./components/sidebar/ViewOrder.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/login"
        element={
          <Authlayer authentication={false}>
            <Login />
          </Authlayer>
        }
      />

      <Route
        path="/signup"
        element={
          <Authlayer authentication={false}>
            <Signup />
          </Authlayer>
        }
      />

      <Route
        path="/"
        element={
          <Authlayer authentication={true}>
            <Layout />
          </Authlayer>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping-address" element={<ShippingAddress />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/summary" element={<Summary />} />

        <Route path="/profile" element={<PersonalDetails />}>
          <Route path="/profile" element={<Info />} />
          <Route path="/profile/manage-address" element={<ManageAddress />} />
          <Route path="/profile/my-orders" element={<Myorder />} />
          <Route path="/profile/cancle-order" element={<CancleOrder />} />
          <Route path="/profile/order-details" element={<ViewOrder />} />
        </Route>
      </Route>
      <Route
        path="/forget-password"
        element={
          <Authlayer authentication={false}>
            <Forgetpassword />
          </Authlayer>
        }
      />
      <Route
        path="/verify-otp"
        element={
          <Authlayer authentication={false}>
            <EnterOTP />
          </Authlayer>
        }
      />
      <Route
        path="/change-password"
        element={
          <Authlayer authentication={false}>
            <ChangePassword />
          </Authlayer>
        }
      />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
