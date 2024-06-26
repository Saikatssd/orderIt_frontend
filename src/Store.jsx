// // import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
// // import thunk from "redux-thunk";
// // import { restaurantReducer } from "./Reducers/restaurantReducer";
// // import { menuReducer } from "./Reducers/menuReducers";
// // import { cartReducer } from "./Reducers/cartReducer";
// // import { authReducer, forgotPasswordReducer, userReducer } from "./Reducers/userReducer";

// // const reducer = combineReducers({
// //     restaurants: restaurantReducer,
// //     menus: menuReducer,
// //     cart: cartReducer,
// //     auth: authReducer,
// //     user: userReducer,
// //     forgotPassword: forgotPasswordReducer,
// // });
// // let initialState = {
// //     cart: {
// //         cartItems: localStorage.getItem("cartItems") ?
// //             JSON.parse(localStorage.getItem("cartItems")) : [],
// //         deliveryInfo: localStorage.getItem("deliveryInfo") ?
// //             JSON.parse(localStorage.getItem("deliveryInfo")) : [],
// //     },
// // };

// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // const middleware = [thunk];

// // const store = createStore(
// //     reducer,
// //     initialState,
// //     composeEnhancers(applyMiddleware(...middleware))
// // );

// // export default store;


// import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose, } from "redux";
// import thunk from "redux-thunk";
// import { cartReducer } from "./reducers/cartReducer";
// import { menuReducer } from "./reducers/menuReducer";
// import { restaurantReducer } from "./reducers/restaurantReducer";
// import { authReducer, forgotPasswordReducer, userReducer } from "./reducers/userReducer";
// import { newOrderReducer, myOrdersReducer, orderDetailsReducer } from './reducers/orderReducers';

// const reducer = combineReducers({
//     restaurants: restaurantReducer,
//     menus: menuReducer,
//     cart: cartReducer,
//     auth: authReducer,
//     user: userReducer,
//     forgotPassword: forgotPasswordReducer,
//     newOrder: newOrderReducer,
//     myOrders: myOrdersReducer,
//     orderDetails: orderDetailsReducer,

// });

// let initialState = {
//     cart: {
//         cartItems: localStorage.getItem("cartItems")
//             ? JSON.parse(localStorage.getItem("cartItems"))
//             : [],
//         deliveryInfo: localStorage.getItem("deliveryInfo")
//             ? JSON.parse(localStorage.getItem("deliveryInfo"))
//             : [],
//     },
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware = [thunk];
// const store = createStore(
//     reducer,
//     initialState,
//     composeEnhancers(applyMiddleware(...middleware))
// );
// export default store;



import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  import { restaurantReducer } from "./reducers/restaurantReducer";
  import { menuReducer } from "./reducers/menuReducer";
  import { cartReducer } from "./reducers/cartReducer";
  import {
    authReducer,
    forgotPasswordReducer,
    userReducer,
  } from "./reducers/userReducer";
  import {
    myOrdersReducer,
    newOrderReducer,
    orderDetailsReducer,
  } from "./reducers/orderReducers";
  
  const reducer = combineReducers({
    restaurants: restaurantReducer,
    menus: menuReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
  });
  let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      deliveryInfo: localStorage.getItem("deliveryInfo")
        ? JSON.parse(localStorage.getItem("deliveryInfo"))
        : [],
    },
  };
  const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [thunk];
  const store = createStore(
    reducer,
    initialState,
    composeenhancers(applyMiddleware(...middleware))
  );
  export default store;
  