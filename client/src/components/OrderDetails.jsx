import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://digital-product-store.onrender.com";

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await fetch(domain + `/api/order/get/${orderId}`);
      const data = await response.json();
      setOrder(data);
    };

    fetchOrderDetails();
  }, [orderId]);

  if (!order) {
    return <p>Loading order details...</p>;
  }

  console.log(order);
  
  const downloadPDF = async (fileId, fileName) => {
    try {
        const response = await axios.get(`${domain}/api/products/download-pdf/${fileId}`, {
            responseType: 'blob', // Important for handling file downloads
        });

        console.log(response.data);
        

        // Create a link element to trigger the download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${fileName}.pdf`); 
        //link.setAttribute('download', `file_${fileId}.pdf`); // You can set the file name here
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (error) {
        toast.error('Error downloading the PDF');
        console.error(error);
    }
};

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
              <li key={product._id} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <p className="font-semibold">{product.productName}</p>
                    <p className="font-thin">{product.productDescription}</p>
                    <p>Price: R {product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div>
                    <button onClick={() => downloadPDF(product.pdfFileId, product.productName)}>Download</button>
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
