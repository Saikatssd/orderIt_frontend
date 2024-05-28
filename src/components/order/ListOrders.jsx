// // import React, { useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// // import { useAlert } from "react-alert";
// // import { useDispatch, useSelector } from "react-redux";
// // import { MDBDataTable } from "mdbreact";
// // import Loader from "../Layout/Loader";
// // import { getRestaurants } from "../../actions/restaurantAction";
// // import { myOrders, clearErrors } from "../../actions/orderAction";

// // const ListOrders = () => {
// //   const alert = useAlert();
// //   const dispatch = useDispatch();

// //   // const { loading, error, orders } = useSelector((state) => state.myOrders);
// //   const { loading, error, orders } = useSelector((state) => state.myOrders || {});
// //   const { restaurants } = useSelector((state) => state.restaurants || {});

// //   const restaurantList = Array.isArray(restaurants.restaurants)
// //     ? restaurants.restaurants
// //     : [];

// //   useEffect(() => {
// //     dispatch(myOrders());
// //     dispatch(getRestaurants());
// //     if (error) {
// //       alert.error(error);
// //       dispatch(clearErrors());
// //     }
// //   }, [dispatch, alert, error]);

// //   const setOrders = () => {
// //     const data = {
// //       columns: [
// //         {
// //           label: "Restaurant Name",
// //           field: "restaurant",
// //           sort: "asc",
// //         },
// //         {
// //           label: "Order Items",
// //           field: "orderItems",
// //           sort: "asc",
// //         },
// //         {
// //           label: "Num of Items",
// //           field: "numOfItems",
// //           sort: "asc",
// //         },
// //         {
// //           label: "Amount",
// //           field: "amount",
// //           sort: "asc",
// //         },
// //         {
// //           label: "Status",
// //           field: "status",
// //           sort: "asc",
// //         },
// //         {
// //           label: "Order Date",
// //           field: "orderDate",
// //           sort: "asc",
// //         },

// //         {
// //           label: "Actions",
// //           field: "actions",
// //           sort: "asc",
// //         },
// //       ],
// //       rows: [],
// //     };

// //     //check if orders array is not empty or undefined
// //     if (orders && orders.length > 0 && restaurantList.length > 0) {
// //       const sortedOrders = orders.sort(
// //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
// //       );
// //       sortedOrders.forEach((order) => {
// //         const orderItemNames = order.orderItems
// //           .map((item) => item.name)
// //           .join(",");

// //         const restaurant = restaurantList.find(
// //           (restaurant) => restaurant._id.toString() === order.restaurant._id
// //         );
// //         data.rows.push({
// //           restaurant: restaurant?.name || "Unknown Restaurant",
// //           numOfItems: order.orderItems.length,
// //           amount: (
// //             <span>
// //               <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
// //               {order.finalTotal}
// //             </span>
// //           ),
// //           status:
// //             order.orderStatus &&
// //             String(order.orderStatus).includes("Delivered") ? (
// //               <p style={{ color: "green" }}>{order.orderStatus}</p>
// //             ) : (
// //               <p style={{ color: "red" }}>{order.orderStatus}</p>
// //             ),
// //           orderItems: orderItemNames,
// //           orderDate: new Date(order.createdAt).toLocaleDateString(),
// //           actions: (
// //             <Link to={`/eats/orders/${order._id}`} className="btn btn-primary">
// //               <i className="fa fa-eye"></i>
// //             </Link>
// //           ),
// //         });
// //       });
// //     }
// //     return data;
// //   };

// //   return (
// //     <>
// //       <div className="cartt">
// //         <h1 className="my-5">My Orders</h1>

// //         {loading ? (
// //           <Loader />
// //         ) : (
// //           <MDBDataTable
// //             data={setOrders()}
// //             className="px-3"
// //             bordered
// //             striped
// //             hover
// //           />
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default ListOrders;




// // import React, { useEffect, useState, useCallback } from "react";
// // import { Link } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// // import { useAlert } from "react-alert";
// // import { useDispatch, useSelector } from "react-redux";
// // import { MDBDataTable } from "mdbreact";
// // import Loader from "../Layout/Loader";
// // import { getRestaurants } from "../../actions/restaurantAction";
// // import { myOrders, clearErrors } from "../../actions/orderAction";

// // const ListOrders = () => {
// //   const alert = useAlert();
// //   const dispatch = useDispatch();
// //   const [ordersData, setOrdersData] = useState([]); // State for processed order data

// //   const { loading, error, orders } = useSelector((state) => state.myOrders); // Access orders from Redux store
// //   const { restaurants } = useSelector((state) => state.restaurants);

// //   const restaurantList = restaurants.restaurants || []; // Handle empty restaurants

// //   const fetchData = useCallback(async () => {
// //     try {
// //       dispatch(myOrders());
// //       dispatch(getRestaurants());
// //       if (error) {
// //         alert.error(error);
// //         dispatch(clearErrors());
// //       }
// //     } catch (error) {
// //       console.error("Error fetching orders:", error);
// //       // Handle errors gracefully, e.g., display an error message to the user
// //     }
// //   }, [dispatch, alert, error]);

// //   useEffect(() => {
// //     fetchData();
// //   }, [fetchData]); // Run fetchData only on component mount

// //   useEffect(() => {
// //     if (orders && restaurants) { // Process data only when both are available
// //       const processedData = orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
// //         .map((order) => {
// //           const orderItemNames = order.orderItems.map((item) => item.name).join(",");
// //           const restaurant = restaurantList.find((restaurant) => restaurant._id.toString() === order.restaurant._id);

// //           return {
// //             restaurant: restaurant?.name || "Unknown Restaurant",
// //             numOfItems: order.orderItems.length,
// //             amount: (
// //               <span>
// //                 <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
// //                 {order.finalTotal}
// //               </span>
// //             ),
// //             status: order.orderStatus && String(order.orderStatus).includes("Delivered") ? (
// //               <p style={{ color: "green" }}>{order.orderStatus}</p>
// //             ) : (
// //               <p style={{ color: "red" }}>{order.orderStatus}</p>
// //             ),
// //             orderItems: orderItemNames,
// //             orderDate: new Date(order.createdAt).toLocaleDateString(),
// //             actions: (
// //               <Link to={`/eats/orders/${order._id}`} className="btn btn-primary">
// //                 <i className="fa fa-eye"></i>
// //               </Link>
// //             ),
// //           };
// //         });

// //       setOrdersData(processedData);
// //     }
// //   }, [orders, restaurants]); // Update ordersData only when orders or restaurants change

// //   return (
// //     <>
// //       <div className="cartt">
// //         <h1 className="my-5">My Orders</h1>

// //         {loading ? (
// //           <Loader />
// //         ) : (
// //           <MDBDataTable
// //             data={ordersData}
// //             className="px-3"
// //             bordered
// //             striped
// //             hover
// //           />
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default ListOrders;




// // import React, { useEffect, useState, useCallback } from "react";
// // import { Link } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// // import { useAlert } from "react-alert";
// // import { useDispatch, useSelector } from "react-redux";
// // import { MDBDataTable } from "mdbreact";
// // import Loader from "../Layout/Loader";
// // import { getRestaurants } from "../../actions/restaurantAction";
// // import { myOrders, clearErrors } from "../../actions/orderAction";

// // const ListOrders = () => {
// //   const alert = useAlert();
// //   const dispatch = useDispatch();
// //   const [ordersData, setOrdersData] = useState([]); // State for processed order data

// //   const { loading, error, orders } = useSelector((state) => state.myOrders); // Access orders from Redux store
// //   const { restaurants } = useSelector((state) => state.restaurants);

// //   const restaurantList = restaurants?.restaurants || []; // Handle empty restaurants

// //   const fetchData = useCallback(async () => {
// //     try {
// //       dispatch(myOrders());
// //       dispatch(getRestaurants());
// //       if (error) {
// //         alert.error(error);
// //         dispatch(clearErrors());
// //       }
// //     } catch (error) {
// //       console.error("Error fetching orders:", error);
// //       // Handle errors gracefully, e.g., display an error message to the user
// //     }
// //   }, [dispatch, alert, error]);

// //   useEffect(() => {
// //     fetchData();
// //   }, [fetchData]); // Run fetchData only on component mount

// //   useEffect(() => {
// //     if (orders && restaurants) { // Process data only when both are available
// //       const processedData = orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
// //         .map((order) => {
// //           const orderItemNames = order.orderItems.map((item) => item.name).join(",");
// //           const restaurant = order.restaurant ? restaurantList.find((restaurant) => restaurant._id.toString() === order.restaurant._id) : null;

// //           return {
// //             restaurant: restaurant?.name || "Unknown Restaurant",
// //             numOfItems: order.orderItems.length,
// //             amount: (
// //               <span>
// //                 <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
// //                 {order.finalTotal}
// //               </span>
// //             ),
// //             status: order.orderStatus && String(order.orderStatus).includes("Delivered") ? (
// //               <p style={{ color: "green" }}>{order.orderStatus}</p>
// //             ) : (
// //               <p style={{ color: "red" }}>{order.orderStatus}</p>
// //             ),
// //             orderItems: orderItemNames,
// //             orderDate: new Date(order.createdAt).toLocaleDateString(),
// //             actions: (
// //               <Link to={`/eats/orders/${order._id}`} className="btn btn-primary">
// //                 <i className="fa fa-eye"></i>
// //               </Link>
// //             ),
// //           };
// //         });

// //       setOrdersData(processedData);
// //     }
// //   }, [orders, restaurants, restaurantList]); // Update ordersData only when orders, restaurants, or restaurantList change

// //   return (
// //     <>
// //       <div className="cartt">
// //         <h1 className="my-5">My Orders</h1>

// //         {loading ? (
// //           <Loader />
// //         ) : (
// //           <MDBDataTable
// //             data={{
// //               columns: [
// //                 {
// //                   label: "Restaurant Name",
// //                   field: "restaurant",
// //                   sort: "asc",
// //                 },
// //                 {
// //                   label: "Order Items",
// //                   field: "orderItems",
// //                   sort: "asc",
// //                 },
// //                 {
// //                   label: "Num of Items",
// //                   field: "numOfItems",
// //                   sort: "asc",
// //                 },
// //                 {
// //                   label: "Amount",
// //                   field: "amount",
// //                   sort: "asc",
// //                 },
// //                 {
// //                   label: "Status",
// //                   field: "status",
// //                   sort: "asc",
// //                 },
// //                 {
// //                   label: "Order Date",
// //                   field: "orderDate",
// //                   sort: "asc",
// //                 },

// //                 {
// //                   label: "Actions",
// //                   field: "actions",
// //                   sort: "asc",
// //                 },
// //               ],
// //               rows: ordersData,
// //             }}
// //             className="px-3"
// //             bordered
// //             striped
// //             hover
// //           />
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default ListOrders;




// // import React, { useEffect, useState, useCallback } from "react";
// // import { Link } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// // import { useAlert } from "react-alert";
// // import { useDispatch, useSelector } from "react-redux";
// // import { MDBDataTable } from "mdbreact";
// // import Loader from "../Layout/Loader";
// // import { getRestaurants } from "../../actions/restaurantAction";
// // import { myOrders, clearErrors } from "../../actions/orderAction";

// // const ListOrders = () => {
// //   const alert = useAlert();
// //   const dispatch = useDispatch();
// //   const [ordersData, setOrdersData] = useState([]); // State for processed order data

// //   const { loading, error, orders } = useSelector((state) => state.myOrders); // Access orders from Redux store
// //   const { restaurants } = useSelector((state) => state.restaurants);

// //   const restaurantList = restaurants?.restaurants || []; // Handle empty restaurants

// //   const fetchData = useCallback(() => {
// //     dispatch(myOrders());
// //     dispatch(getRestaurants());
// //   }, [dispatch]);

// //   useEffect(() => {
// //     fetchData();
// //   }, [fetchData]);

// //   useEffect(() => {
// //     if (error) {
// //       alert.error(error);
// //       dispatch(clearErrors());
// //     }
// //   }, [error, alert, dispatch]);

// //   useEffect(() => {
// //     if (orders && restaurantList.length > 0) { // Process data only when both are available
// //       const processedData = orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
// //         .map((order) => {
// //           const orderItemNames = order.orderItems.map((item) => item.name).join(",");
// //           const restaurant = order.restaurant ? restaurantList.find((restaurant) => restaurant._id.toString() === order.restaurant._id) : null;

// //           return {
// //             restaurant: restaurant?.name || "Unknown Restaurant",
// //             numOfItems: order.orderItems.length,
// //             amount: (
// //               <span>
// //                 <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
// //                 {order.finalTotal}
// //               </span>
// //             ),
// //             status: order.orderStatus && String(order.orderStatus).includes("Delivered") ? (
// //               <p style={{ color: "green" }}>{order.orderStatus}</p>
// //             ) : (
// //               <p style={{ color: "red" }}>{order.orderStatus}</p>
// //             ),
// //             orderItems: orderItemNames,
// //             orderDate: new Date(order.createdAt).toLocaleDateString(),
// //             actions: (
// //               <Link to={`/eats/orders/${order._id}`} className="btn btn-primary">
// //                 <i className="fa fa-eye"></i>
// //               </Link>
// //             ),
// //           };
// //         });

// //       setOrdersData(processedData);
// //     }
// //   }, [orders, restaurantList]);

// //   return (
// //     <>
// //       <div className="cartt">
// //         <h1 className="my-5">My Orders</h1>

// //         {loading ? (
// //           <Loader />
// //         ) : (
// //           <MDBDataTable
// //             data={{
// //               columns: [
// //                 { label: "Restaurant Name", field: "restaurant", sort: "asc" },
// //                 { label: "Order Items", field: "orderItems", sort: "asc" },
// //                 { label: "Num of Items", field: "numOfItems", sort: "asc" },
// //                 { label: "Amount", field: "amount", sort: "asc" },
// //                 { label: "Status", field: "status", sort: "asc" },
// //                 { label: "Order Date", field: "orderDate", sort: "asc" },
// //                 { label: "Actions", field: "actions", sort: "asc" },
// //               ],
// //               rows: ordersData,
// //             }}
// //             className="px-3"
// //             bordered
// //             striped
// //             hover
// //           />
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default ListOrders;




import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable } from "mdbreact";
import Loader from "../Layout/Loader";
import { getRestaurants } from "../../actions/restaurantAction";
import { myOrders, clearErrors } from "../../actions/orderAction";

const ListOrders = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [ordersData, setOrdersData] = useState([]);

  const { loading, error, orders = [] } = useSelector((state) => state.myOrders); // default to empty array
  const { restaurants = { restaurants: [] } } = useSelector((state) => state.restaurants); // default to empty object

  const fetchData = useCallback(() => {
    dispatch(myOrders());
    dispatch(getRestaurants());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [error, alert, dispatch]);

  useEffect(() => {
    console.log("Orders:", orders);
    console.log("Restaurants:", restaurants);
    if (orders.length > 0 && restaurants.restaurants.length > 0) {
      const processedData = orders
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((order) => {
          const orderItemNames = order.orderItems.map((item) => item.name).join(", ");
          const restaurant = restaurants.restaurants.find((restaurant) => restaurant._id === order.restaurant);
          console.log("restaurants:", restaurant);
          // console.log("orderItemNames:", restaurant);
          return {
            restaurant: restaurant ? restaurant.name : "Unknown Restaurant",
            numOfItems: order.orderItems.length,
            amount: (
              <span>
                <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
                {order.finalTotal}
              </span>
            ),
            status: order.orderStatus && order.orderStatus.includes("Delivered") ? (
              <p style={{ color: "green" }}>{order.orderStatus}</p>
            ) : (
              <p style={{ color: "red" }}>{order.orderStatus}</p>
            ),
            orderItems: orderItemNames,
            orderDate: new Date(order.createdAt).toLocaleDateString(),
            actions: (
              <Link to={`/eats/orders/${order._id}`} className="btn btn-primary">
                <i className="fa fa-eye"></i>
              </Link>
            ),
          };
        });

      setOrdersData(processedData);
    }
  }, [orders, restaurants]);

  return (
    <div className="cart">
      <h1 className="my-5">My Orders</h1>
      {loading ? (
        <Loader />
      ) : (
        <MDBDataTable
          data={{
            columns: [
              { label: "Restaurant Name", field: "restaurant", sort: "asc" },
              { label: "Order Items", field: "orderItems", sort: "asc" },
              { label: "Num of Items", field: "numOfItems", sort: "asc" },
              { label: "Amount", field: "amount", sort: "asc" },
              { label: "Status", field: "status", sort: "asc" },
              { label: "Order Date", field: "orderDate", sort: "asc" },
              { label: "Actions", field: "actions", sort: "asc" },
            ],
            rows: ordersData,
          }}
          className="px-3"
          bordered
          striped
          hover
        />
      )}
    </div>
  );
};

export default ListOrders;



// import React, { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// import { useAlert } from "react-alert";
// import { useDispatch, useSelector } from "react-redux";
// import { MDBDataTable } from "mdbreact";
// import Loader from "../Layout/Loader";
// import { getRestaurants } from "../../actions/restaurantAction";
// import { myOrders, clearErrors } from "../../actions/orderAction";

// const ListOrders = () => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const [ordersData, setOrdersData] = useState([]);

//   const { loading, error, orders = [] } = useSelector((state) => state.myOrders); // default to empty array
//   const { restaurants = { restaurants: [] } } = useSelector((state) => state.restaurants); // default to empty object

//   const fetchData = useCallback(() => {
//     dispatch(myOrders());
//     dispatch(getRestaurants());
//   }, [dispatch]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//   }, [error, alert, dispatch]);

//   useEffect(() => {
//     // Only process data if both orders and restaurants are available
//     if (orders.length > 0 && restaurants.restaurants.length > 0) {
//       const processedData = orders
//         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//         .map((order) => {
//           const orderItemNames = order.orderItems.map((item) => item.name).join(", ");
//           const restaurant = restaurants.restaurants.find((restaurant) => restaurant._id === order.restaurant);
          
//           return {
//             restaurant: restaurant ? restaurant.name : "Unknown Restaurant",
//             numOfItems: order.orderItems.length,
//             amount: (
//               <span>
//                 <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
//                 {order.finalTotal}
//               </span>
//             ),
//             status: order.orderStatus && order.orderStatus.includes("Delivered") ? (
//               <p style={{ color: "green" }}>{order.orderStatus}</p>
//             ) : (
//               <p style={{ color: "red" }}>{order.orderStatus}</p>
//             ),
//             orderItems: orderItemNames,
//             orderDate: new Date(order.createdAt).toLocaleDateString(),
//             actions: (
//               <Link to={`/eats/orders/${order._id}`} className="btn btn-primary">
//                 <i className="fa fa-eye"></i>
//               </Link>
//             ),
//           };
//         });

//       setOrdersData(processedData);
//     } else {
//       // If data not available, set ordersData to empty array to clear the table
//       setOrdersData([]);
//     }
//   }, [orders, restaurants]);

//   return (
//     <div className="cartt">
//       <h1 className="my-5">My Orders</h1>
//       {loading ? (
//         <Loader />
//       ) : (
//         <MDBDataTable
//           data={{
//             columns: [
//               { label: "Restaurant Name", field: "restaurant", sort: "asc" },
//               { label: "Order Items", field: "orderItems", sort: "asc" },
//               { label: "Num of Items", field: "numOfItems", sort: "asc" },
//               { label: "Amount", field: "amount", sort: "asc" },
//               { label: "Status", field: "status", sort: "asc" },
//               { label: "Order Date", field: "orderDate", sort: "asc" },
//               { label: "Actions", field: "actions", sort: "asc" },
//             ],
//             rows: ordersData,
//           }}
//           className="px-3"
//           bordered
//           striped
//           hover
//         />
//       )}
//     </div>
//   );
// };

// export default ListOrders;
