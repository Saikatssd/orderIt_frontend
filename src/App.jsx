// import './App.css'
// import Home from './components/Home'
// import Footer from './components/Layout/Footer'
// import Header from './components/Layout/Header.jsx'
// import React, { useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Menu from './components/Menu'
// import Cart from './components/cart/Cart'
// import Delivery from './components/cart/Delivery'
// import Login from './components/user/Login'
// import Register from './components/user/Register'
// import { loadUser } from './Actions/userAction'
// import store from "./Store";
// import Profile from './components/user/Profile'

// export default function App() {

//   useEffect(()=>{
//     store.dispatch(loadUser());
//   },[]);

//   return (

//     <Router>
//       <div className='App'>

//         <Header />
//         <div className=" mx-auto flex w-full flex-wrap items-center justify-center p-3">
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/eats/stores/:id/menus" element={<Menu />} />
//             <Route exact path="/cart" element={<Cart />} />
//             <Route exact path="/delivery" element={<Delivery />} />
//             {/* user */}
//             <Route exact path="/users/login" element={<Login />} />
//             <Route exact path="/users/signup" element={<Register />} />
//             {/* <Route exact path="/users/me" element={<Profile />} /> */}

//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   )
// }





import "./App.css";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home";
import Header from "./components/Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/cart/Cart";
import Delivery from "./components/cart/Delivery";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { loadUser } from "./actions/userActions";
import { useEffect, useState } from "react";
import store from "./Store";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";
import ConfirmOrder from "./components/cart/ConfirmOrder";
//payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./components/cart/Payment";
import axios from "axios";
import OrderSuccess from "./components/cart/OrderSuccess";
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {server} from './main'


function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  
  // console.log("setStripeApiKey",stripeApiKey);

  useEffect(() => {
    store.dispatch(loadUser());
    async function getStripeApiKey() {
      const { data } = await axios.get(`${server}api/v1/payment/stripeapikey`);
      // console.log("data:",data)
      // const { data } = await axios.get("api/v1/stripeapi");
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route
              path="/eats/stores/search/:keyword"
              element={<Home />}
              exact
            />
            <Route path="/eats/stores/:id/menus" element={<Menu />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/delivery" element={<Delivery />} exact />
            {/* user */}
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} exact />
            <Route
              path="/users/forgetPassword"
              element={<ForgotPassword />}
              exact
            />
            <Route
              path="/users/resetPassword/:token"
              element={<NewPassword />}
              exact
            />
            <Route path="/confirm" element={<ConfirmOrder />} />
            {/* payment */}
            {stripeApiKey && (
              <Route
                path="/payment"
                element={
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                }
              />
            )}
            <Route path="/success" element={<OrderSuccess />} />
            {/* orderList */}

            <Route path="/eats/orders/me/myOrders" element={<ListOrders />} />
            <Route path="/eats/orders/:id" element={<OrderDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
