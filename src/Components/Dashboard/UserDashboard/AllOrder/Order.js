import React from "react";

const Order = ({ order, index }) => {
  const { name, email, serviceName, servicePrice,  date } = order;

  return (
    <tr>
      {/* <td>{index++}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{serviceName}</td>
      <td>{servicePrice}</td>
      <td>{date}</td>
      <td>
        <select>
          <option className="bg-white text-secondary">Pending</option>
          <option className="bg-white text-secondary">Approved</option>
          <option className="bg-white text-secondary">Rejected</option>
        </select>
      </td> */}
      <td>{index++}</td>
      <td>Name 1</td>
      <td>email@gmail.com</td>
      <td>0178...</td>
      <td>BM-5464</td>
      <td>02/08/24</td>
      <td>
        <select>
          <option className="bg-white text-secondary">Pending</option>
          <option className="bg-white text-secondary">Approved</option>
          <option className="bg-white text-secondary">Rejected</option>
        </select>
      </td>
      {/* <td>{paymentId}</td> */}
    </tr>
  );
};

export default Order;
