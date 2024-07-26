import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTable } from "mdbreact";
import Loader from "../Layout/Loader";
import { getRestaurants } from "../../actions/restaurantAction";
import { myOrders, clearErrors } from "../../actions/orderAction";

import {toast } from "react-hot-toast";
const ListOrders = () => {
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
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

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

