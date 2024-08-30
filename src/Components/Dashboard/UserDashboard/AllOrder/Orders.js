import React, { useEffect, useState } from "react";
import TableLoader from "../../../Common/TableLoader";
 
import Order from "./Order";
import "./orders.css";
const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
   
    fetch("https://photograpy-backend.onrender.com/checkout")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, []);

  return (
    <div className="px-2">
      {allOrders.length === 0 ? (
        <TableLoader />
      ) : (
        <div className="jumbotron w-100 m-0 h-75 ">
        <table className="table  table-responsive table-hover">
          <thead>
            <tr>
              <th className="text-dark text-left" scope="col">
                SL No.
              </th>
              <th className="text-dark" scope="col">
                Driver Name
              </th>
              <th className="text-dark" scope="col">
                 Email
              </th>
              <th className="text-dark" scope="col">
                Mobile
              </th>
              <th className="text-dark" scope="col">
                Bus Number
              </th>
              <th className="text-dark" scope="col">
                Date
              </th>
              <th className="text-dark" scope="col">
                Status
              </th>
            
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <Order order={order} index={index} key={order._id} />
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
