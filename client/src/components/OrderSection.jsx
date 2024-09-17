import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const OrderSection = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('http://localhost:5000/api/order/get-all-orders/' + user._id, {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders();
  }, [user]);

  if (orders.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-5">
        You have no orders yet.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-8">
      <p className="text-2xl font-semibold mb-6 text-gray-800">Your Orders</p>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li key={order._id} className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <Link to={`/orders/${order._id}`} className="block hover:bg-gray-100 transition">
              <div className="flex justify-between items-center mb-3">
                <p className="text-lg font-medium text-gray-900">
                  Order ID: <span className="text-blue-600">{order.id}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Order Date: {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-gray-700">
                <p>Total: <span className="font-semibold text-green-600">R {order.totalAmount.toFixed(2)}</span></p>
                <p>Status: <span className={`font-semibold ${order.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>{order.status}</span></p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSection;
