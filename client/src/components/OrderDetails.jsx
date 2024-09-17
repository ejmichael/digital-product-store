import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await fetch(`http://localhost:5000/api/order/get/${orderId}`);
      const data = await response.json();
      setOrder(data);
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!order) {
    return <p>Loading order details...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Details</h2>
      <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
        <div className="mb-4">
          <p className="text-lg font-medium">Order ID: {order.id}</p>
          <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
          <p>Status: {order.status}</p>
          <p>Total: R {order.totalAmount.toFixed(2)}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ul className="space-y-4">
            {order.products.map((product) => (
              <li key={product._id} className="flex items-center space-x-4">
                <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  {/* <p>Price: R {product.price.toFixed(2)}</p> */}
                  <p>Quantity: {product.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
